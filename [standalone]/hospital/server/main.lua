RSCore = nil
TriggerEvent('RSCore:GetObject', function(obj) RSCore = obj end)

local PlayerInjuries = {}
local PlayerWeaponWounds = {}
local bedsTaken = {}

RegisterServerEvent('hospital:server:SendToBed')
AddEventHandler('hospital:server:SendToBed', function(bedId, isRevive)
	local src = source
	TriggerClientEvent('hospital:client:SendToBed', src, bedId, Config.Locations["beds"][bedId], isRevive)
	TriggerClientEvent('hospital:client:SetBed', -1, bedId, true)
end)

RegisterServerEvent('hospital:server:RespawnAtHospital')
AddEventHandler('hospital:server:RespawnAtHospital', function()
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	for k, v in pairs(Config.Locations["beds"]) do
		TriggerClientEvent('hospital:client:SendToBed', src, k, v, true)
		TriggerClientEvent('hospital:client:SetBed', -1, k, true)
		Player.Functions.ClearInventory()
		RSCore.Functions.ExecuteSql(true, "UPDATE `players` SET `inventory` = '"..RSCore.EscapeSqli(json.encode({})).."' WHERE `citizenid` = '"..Player.PlayerData.citizenid.."'")
		Player.Functions.RemoveMoney("bank", Config.BillCost, "respawned-at-hospital")
		TriggerClientEvent('RSCore:Notify', src, 'Al je bezittingen zijn ingenomen..', 'error')
		TriggerClientEvent('hospital:client:SendBillEmail', src, Config.BillCost)
		return
	end
end)

RegisterServerEvent('hospital:server:LeaveBed')
AddEventHandler('hospital:server:LeaveBed', function(id)
    TriggerClientEvent('hospital:client:SetBed', -1, id, false)
end)

RegisterServerEvent('hospital:server:SyncInjuries')
AddEventHandler('hospital:server:SyncInjuries', function(data)
    local src = source
    PlayerInjuries[src] = data
end)


RegisterServerEvent('hospital:server:SetWeaponDamage')
AddEventHandler('hospital:server:SetWeaponDamage', function(data)
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	if Player ~= nil then 
		PlayerWeaponWounds[Player.PlayerData.source] = data
	end
end)

RegisterServerEvent('hospital:server:RestoreWeaponDamage')
AddEventHandler('hospital:server:RestoreWeaponDamage', function()
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	PlayerWeaponWounds[Player.PlayerData.source] = nil
end)

RegisterServerEvent('hospital:server:SetDeathStatus')
AddEventHandler('hospital:server:SetDeathStatus', function(isDead)
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	if Player ~= nil then
		Player.Functions.SetMetaData("isdead", isDead)
	end
end)

RegisterServerEvent('hospital:server:SetLaststandStatus')
AddEventHandler('hospital:server:SetLaststandStatus', function(bool)
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	if Player ~= nil then
		Player.Functions.SetMetaData("inlaststand", bool)
	end
end)

RegisterServerEvent('hospital:server:SetArmor')
AddEventHandler('hospital:server:SetArmor', function(amount)
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	if Player ~= nil then
		Player.Functions.SetMetaData("armor", amount)
	end
end)

RegisterServerEvent('hospital:server:TreatWounds')
AddEventHandler('hospital:server:TreatWounds', function(playerId)
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	local Patient = RSCore.Functions.GetPlayer(playerId)
	if Patient ~= nil then
		if Player.PlayerData.job.name == "ambulance" then
			TriggerClientEvent("hospital:client:HealInjuries", Patient.PlayerData.source, "full")
		-- elseif Player.PlayerData.job.name == "ambulance" then
		-- 	TriggerClientEvent("hospital:client:HealInjuries", Patient.PlayerData.source, "partial")
		end
	end
end)

RegisterServerEvent('hospital:server:SetDoctor')
AddEventHandler('hospital:server:SetDoctor', function()
	local amount = 0
	for k, v in pairs(RSCore.Functions.GetPlayers()) do
        local Player = RSCore.Functions.GetPlayer(v)
        if Player ~= nil then 
            if ((Player.PlayerData.job.gradelabel == "Hulpverlener" or Player.PlayerData.job.gradelabel == "Verpleegkundige" or Player.PlayerData.job.gradelabel == "Doctor" or Player.PlayerData.job.gradelabel == "Hoofd Geneeskunde") and Player.PlayerData.job.onduty) then
                amount = amount + 1
            end
        end
	end
	TriggerClientEvent("hospital:client:SetDoctorCount", -1, amount)
end)

RegisterServerEvent('hospital:server:RevivePlayer')
AddEventHandler('hospital:server:RevivePlayer', function(playerId, isOldMan)
	local src = source
	local Player = RSCore.Functions.GetPlayer(src)
	local Patient = RSCore.Functions.GetPlayer(playerId)
	local oldMan = isOldMan ~= nil and isOldMan or false
	if Patient ~= nil then
		if oldMan then
			if Player.Functions.RemoveMoney("cash", 5000, "revived-player") then
				TriggerClientEvent('hospital:client:Revive', Patient.PlayerData.source)
			else
				TriggerClientEvent('RSCore:Notify', src, "Je hebt niet genoeg geld op zak..", "error")
			end
		else
			TriggerClientEvent('hospital:client:Revive', Patient.PlayerData.source)
		end
	end
end)

RegisterServerEvent('hospital:server:SendDoctorAlert')
AddEventHandler('hospital:server:SendDoctorAlert', function()
	local src = source
	for k, v in pairs(RSCore.Functions.GetPlayers()) do
		local Player = RSCore.Functions.GetPlayer(v)
		if Player ~= nil then 
			if ((Player.PlayerData.job.gradelabel == "Hulpverlener" or Player.PlayerData.job.gradelabel == "Verpleegkundige" or Player.PlayerData.job.gradelabel == "Doctor" or Player.PlayerData.job.gradelabel == "Hoofd Geneeskunde") and Player.PlayerData.job.onduty) then
				TriggerClientEvent("hospital:client:SendAlert", v, "Er is een dokter nodig bij Pillbox Ziekenhuis")
			end
		end
	end
end)

RegisterServerEvent('hospital:server:MakeDeadCall')
AddEventHandler('hospital:server:MakeDeadCall', function(blipSettings, gender, street1, street2)
	local src = source
	local genderstr = "Man"

	if gender == 1 then genderstr = "Vrouw" end

	if street2 ~= nil then
		TriggerClientEvent("112:client:SendAlert", -1, "Een ".. genderstr .." gewond bij " ..street1 .. " "..street2, blipSettings)
		TriggerClientEvent('rs-policealerts:client:AddPoliceAlert', -1, {
            timeOut = 5000,
            alertTitle = "Persoon gewond",
            details = {
                [1] = {
                    icon = '<i class="fas fa-venus-mars"></i>',
                    detail = genderstr,
                },
                [2] = {
                    icon = '<i class="fas fa-globe-europe"></i>',
                    detail = street1.. ' '..street2,
                },
            },
            callSign = nil,
        }, true)
	else
		TriggerClientEvent("112:client:SendAlert", -1, "Een ".. genderstr .." gewond bij "..street1, blipSettings)
		TriggerClientEvent('rs-policealerts:client:AddPoliceAlert', -1, {
            timeOut = 5000,
            alertTitle = "Persoon gewond",
            details = {
                [1] = {
                    icon = '<i class="fas fa-venus-mars"></i>',
                    detail = genderstr,
                },
                [2] = {
                    icon = '<i class="fas fa-globe-europe"></i>',
                    detail = street1,
                },
            },
            callSign = nil,
        }, true)
	end
end)

RSCore.Functions.CreateCallback('hospital:GetDoctors', function(source, cb)
	local amount = 0
	for k, v in pairs(RSCore.Functions.GetPlayers()) do
		local Player = RSCore.Functions.GetPlayer(v)
		if Player ~= nil then 
			if ((Player.PlayerData.job.gradelabel == "Hulpverlener" or Player.PlayerData.job.gradelabel == "Verpleegkundige" or Player.PlayerData.job.gradelabel == "Doctor" or Player.PlayerData.job.gradelabel == "Hoofd Geneeskunde") and Player.PlayerData.job.onduty) then
				amount = amount + 1
			end
		end
	end
	cb(amount)
end)


function GetCharsInjuries(source)
    return PlayerInjuries[source]
end

function GetActiveInjuries(source)
	local injuries = {}
	if (PlayerInjuries[source].isBleeding > 0) then
		injuries["BLEED"] = PlayerInjuries[source].isBleeding
	end
	for k, v in pairs(PlayerInjuries[source].limbs) do
		if PlayerInjuries[source].limbs[k].isDamaged then
			injuries[k] = PlayerInjuries[source].limbs[k]
		end
	end
    return injuries
end


RSCore.Functions.CreateCallback('hospital:GetPlayerStatus', function(source, cb, playerId)
	local Player = RSCore.Functions.GetPlayer(playerId)
	local injuries = {}
	injuries["WEAPONWOUNDS"] = {}
	if Player ~= nil then
		if PlayerInjuries[Player.PlayerData.source] ~= nil then
			if (PlayerInjuries[Player.PlayerData.source].isBleeding > 0) then
				injuries["BLEED"] = PlayerInjuries[Player.PlayerData.source].isBleeding
			end
			for k, v in pairs(PlayerInjuries[Player.PlayerData.source].limbs) do
				if PlayerInjuries[Player.PlayerData.source].limbs[k].isDamaged then
					injuries[k] = PlayerInjuries[Player.PlayerData.source].limbs[k]
				end
			end
		end
		if PlayerWeaponWounds[Player.PlayerData.source] ~= nil then 
			for k, v in pairs(PlayerWeaponWounds[Player.PlayerData.source]) do
				injuries["WEAPONWOUNDS"][k] = v
			end
		end
	end
    cb(injuries)
end)

RSCore.Functions.CreateCallback('hospital:GetPlayerBleeding', function(source, cb)
	local src = source
	if PlayerInjuries[src] ~= nil and PlayerInjuries[src].isBleeding ~= nil then
		cb(PlayerInjuries[src].isBleeding)
	else
		cb(nil)
	end
end)

RSCore.Commands.Add("status", "Check gezondheid van een persoon", {}, false, function(source, args)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.PlayerData.job.name == "ambulance" then
		TriggerClientEvent("hospital:client:CheckStatus", source)
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Dit command is voor hulpdiensten!")
	end
end)

RSCore.Commands.Add("genees", "Help de verwondingen van een persoon", {}, false, function(source, args)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.PlayerData.job.name == "ambulance" then
		TriggerClientEvent("hospital:client:TreatWounds", source)
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Dit command is voor hulpdiensten!")
	end
end)

RSCore.Commands.Add("revivep", "Help een persoon omhoog", {}, false, function(source, args)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.PlayerData.job.name == "ambulance" then
		TriggerClientEvent("hospital:client:RevivePlayer", source)
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Dit command is voor hulpdiensten!")
	end
end)

RSCore.Commands.Add("revive", "Revive een speler of jezelf", {{name="id", help="Speler ID (mag leeg zijn)"}}, false, function(source, args)
	if args[1] ~= nil then
		local Player = RSCore.Functions.GetPlayer(tonumber(args[1]))
		if Player ~= nil then
			TriggerClientEvent('hospital:client:Revive', Player.PlayerData.source)
		else
			TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Speler is niet online!")
		end
	else
		TriggerClientEvent('hospital:client:Revive', source)
	end
end, "admin")

RSCore.Commands.Add("setpain", "Zet een pijn voor jezelf of iemand anders", {{name="id", help="Speler ID (mag leeg zijn)"}}, false, function(source, args)
	if args[1] ~= nil then
		local Player = RSCore.Functions.GetPlayer(tonumber(args[1]))
		if Player ~= nil then
			TriggerClientEvent('hospital:client:SetPain', Player.PlayerData.source)
		else
			TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Speler is niet online!")
		end
	else
		TriggerClientEvent('hospital:client:SetPain', source)
	end
end, "god")

RSCore.Commands.Add("kill", "Vermoord een speler of jezelf", {{name="id", help="Speler ID (mag leeg zijn)"}}, false, function(source, args)
	if args[1] ~= nil then
		local Player = RSCore.Functions.GetPlayer(tonumber(args[1]))
		if Player ~= nil then
			TriggerClientEvent('hospital:client:KillPlayer', Player.PlayerData.source)
		else
			TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Speler is niet online!")
		end
	else
		TriggerClientEvent('hospital:client:KillPlayer', source)
	end
end, "god")

RSCore.Commands.Add("setambulance", "Geef de ambulance baan aan iemand ", {{name="id", help="Speler ID"}, {name="grade", help="rang"}}, true, function(source, args)
    local Player = RSCore.Functions.GetPlayer(tonumber(args[1]))
    local Myself = RSCore.Functions.GetPlayer(source)
    if Player ~= nil then 
        if Myself.PlayerData.job.name == "ambulance" and Myself.PlayerData.job.gradelabel == "Hoofd Geneeskunde" then
            Player.Functions.SetJob("ambulance", tonumber(args[2]))
		else
			TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Je hebt hier geen rechten voor")
		end
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Speler is niet online!")
	end
end)

RSCore.Commands.Add("fireambulance", "Ontsla een ambulance!", {{name="id", help="Speler ID"}}, true, function(source, args)
    local Player = RSCore.Functions.GetPlayer(tonumber(args[1]))
    local Myself = RSCore.Functions.GetPlayer(source)
    if Player ~= nil then 
        if Myself.PlayerData.job.name == "ambulance" and Myself.PlayerData.job.gradelabel == "Hoofd Geneeskunde" then
            Player.Functions.SetJob("unemployed", 1)
		else
			TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Je hebt hier geen rechten voor")
		end
	else
		TriggerClientEvent('chatMessage', source, "SYSTEM", "error", "Speler is niet online!")
	end
end)

RSCore.Functions.CreateUseableItem("bandage", function(source, item)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.Functions.GetItemByName(item.name) ~= nil then
		TriggerClientEvent("hospital:client:UseBandage", source)
	end
end)

RSCore.Functions.CreateUseableItem("ifak", function(source, item)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.Functions.GetItemByName(item.name) ~= nil then
		TriggerClientEvent("hospital:client:UseIfak", source)
	end
end)

RSCore.Functions.CreateUseableItem("painkillers", function(source, item)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.Functions.GetItemByName(item.name) ~= nil then
		Citizen.CreateThread(function()
            Citizen.Wait(1000)
            TriggerClientEvent("hospital:client:UsePainkillers", source)
        end)
	end
end)

RSCore.Functions.CreateUseableItem("firstaid", function(source, item)
	local Player = RSCore.Functions.GetPlayer(source)
	if Player.Functions.GetItemByName(item.name) ~= nil then
		TriggerClientEvent("hospital:client:UseFirstAid", source)
	end
end)

function IsHighCommand(citizenid)
    local retval = false
    for k, v in pairs(Config.Whitelist) do
        if v == citizenid then
            retval = true
        end
    end
    return retval
end

RegisterServerEvent('hospital:server:UseFirstAid')
AddEventHandler('hospital:server:UseFirstAid', function(targetId)
	local src = source
	local Target = RSCore.Functions.GetPlayer(targetId)
	if Target ~= nil then
		TriggerClientEvent('hospital:client:CanHelp', targetId, src)
	end
end)

RegisterServerEvent('hospital:server:CanHelp')
AddEventHandler('hospital:server:CanHelp', function(helperId, canHelp)
	local src = source
	if canHelp then
		TriggerClientEvent('hospital:client:HelpPerson', helperId, src)
	else
		TriggerClientEvent('RSCore:Notify', helperId, "Je kunt dit persoon nog niet ophelpen..", "error")
	end
end)