RSCore = nil

TriggerEvent('RSCore:GetObject', function(obj) RSCore = obj end)

--CODE

local Races = {}
RegisterServerEvent('rs-streetraces:NewRace')
AddEventHandler('rs-streetraces:NewRace', function(RaceTable)
    local src = source
    local RaceId = math.random(1000, 9999)
    local xPlayer = RSCore.Functions.GetPlayer(src)
    if xPlayer.Functions.RemoveMoney('cash', RaceTable.amount, "streetrace-created") then
        Races[RaceId] = RaceTable
        Races[RaceId].creator = GetPlayerIdentifiers(src)[1]
        table.insert(Races[RaceId].joined, GetPlayerIdentifiers(src)[1])
        TriggerClientEvent('rs-streetraces:SetRace', -1, Races)
        TriggerClientEvent('rs-streetraces:SetRaceId', src, RaceId)
        TriggerClientEvent('RSCore:Notify', src, "Je doet mee aan de race voor €"..Races[RaceId].amount..",-", 'success')
    end
end)

RegisterServerEvent('rs-streetraces:RaceWon')
AddEventHandler('rs-streetraces:RaceWon', function(RaceId)
    local src = source
    local xPlayer = RSCore.Functions.GetPlayer(src)
    xPlayer.Functions.AddMoney('cash', Races[RaceId].pot, "race-won")
    TriggerClientEvent('RSCore:Notify', src, "Je hebt de race gewonnen en €"..Races[RaceId].pot..",- ontvangen", 'success')
    TriggerClientEvent('rs-streetraces:SetRace', -1, Races)
    TriggerClientEvent('rs-streetraces:RaceDone', -1, RaceId, GetPlayerName(src))
end)

RegisterServerEvent('rs-streetraces:JoinRace')
AddEventHandler('rs-streetraces:JoinRace', function(RaceId)
    local src = source
    local xPlayer = RSCore.Functions.GetPlayer(src)
    local zPlayer = RSCore.Functions.GetPlayer(Races[RaceId].creator)
    if zPlayer ~= nil then
        if xPlayer.PlayerData.money.cash >= Races[RaceId].amount then
            Races[RaceId].pot = Races[RaceId].pot + Races[RaceId].amount
            table.insert(Races[RaceId].joined, GetPlayerIdentifiers(src)[1])
            if xPlayer.Functions.RemoveMoney('cash', Races[RaceId].amount, "streetrace-joined") then
                TriggerClientEvent('rs-streetraces:SetRace', -1, Races)
                TriggerClientEvent('rs-streetraces:SetRaceId', src, RaceId)
                TriggerClientEvent('RSCore:Notify', zPlayer.PlayerData.source, GetPlayerName(src).." is de race gejoined!", 'primary')
            end
        else
            TriggerClientEvent('RSCore:Notify', src, "Je hebt niet genoeg cash op zak!", 'error')
        end
    else
        TriggerClientEvent('RSCore:Notify', src, "Degene die de race heeft gemaakt is offline!", 'error')
        Races[RaceId] = {}
    end
end)

-- RSCore.Commands.Add("race", "Een straatrace starten.", {{name="bedrag", help="Het inlegbedrag voor de race."}}, true, function(source, args)
--     local src = source
--     local xPlayer = RSCore.Functions.GetPlayer(src)
--     local amount = tonumber(args[1])
--     if GetJoinedRace(GetPlayerIdentifiers(src)[1]) == 0 then
--         if xPlayer.PlayerData.money.cash >= amount then
--             TriggerClientEvent('rs-streetraces:CreateRace', src, amount)
--         else
--             TriggerClientEvent('RSCore:Notify', src, "Je hebt niet genoeg cash op zak!", 'error')
--         end
--     else
--         TriggerClientEvent('RSCore:Notify', src, "Je zit al in een race!", 'error')
--     end
-- end)

RSCore.Commands.Add("stoprace", "Een race stoppen als creator.", {}, false, function(source, args)
    local src = source
    CancelRace(src)
end)

RSCore.Commands.Add("quitrace", "Een race uitstappen. (Je krijgt je geld NIET terug!)", {}, false, function(source, args)
    local src = source
    local xPlayer = RSCore.Functions.GetPlayer(src)
    local RaceId = GetJoinedRace(GetPlayerIdentifiers(src)[1])
    local zPlayer = RSCore.Functions.GetPlayer(Races[RaceId].creator)
    if RaceId ~= 0 then
        if GetCreatedRace(GetPlayerIdentifiers(src)[1]) ~= RaceId then
            RemoveFromRace(GetPlayerIdentifiers(src)[1])
            TriggerClientEvent('RSCore:Notify', src, "Je bent de race uitgestapt! En je bent je geld kwijtgeraakt", 'error')
            TriggerClientEvent('esx:showNotification', zPlayer.PlayerData.source, GetPlayerName(src) .." is uit de race gestapt!", "red")
        else
            TriggerClientEvent('RSCore:Notify', src, "/stoprace om de race te stoppen!", 'error')
        end
    else
        TriggerClientEvent('RSCore:Notify', src, "Je zit niet in een race..", 'error')
    end
end)

RSCore.Commands.Add("startrace", "Race beginnen", {}, false, function(source, args)
    local src = source
    local RaceId = GetCreatedRace(GetPlayerIdentifiers(src)[1])
    
    if RaceId ~= 0 then
        Races[RaceId].started = true
        TriggerClientEvent('rs-streetraces:SetRace', -1, Races)
        TriggerClientEvent("rs-streetraces:StartRace", -1, RaceId)
    else
        TriggerClientEvent('RSCore:Notify', src, "Je bent geen race gestart!", 'error')
    end
end)

function CancelRace(source)
    local xPlayer = RSCore.Functions.GetPlayer(source)
    local RaceId = GetCreatedRace(GetPlayerIdentifiers(source)[1])

    print(RaceId)

    if RaceId ~= 0 then
        for key, race in pairs(Races) do
            if Races[key] ~= nil and Races[key].creator == xPlayer.PlayerData.steam then
                if not Races[key].started then
                    for _, iden in pairs(Races[key].joined) do
                        local xdPlayer = RSCore.Functions.GetPlayer(iden)
                        xdPlayer.Functions.AddMoney('cash', Races[key].amount, "race-cancelled")
                        TriggerClientEvent('RSCore:Notify', xdPlayer.PlayerData.source, "Race is gestopt, je hebt €"..Races[key].amount..",- terug ontvangen!", 'error')
                        TriggerClientEvent('rs-streetraces:StopRace', xdPlayer.PlayerData.source)
                        RemoveFromRace(iden)
                    end
                else
                    TriggerClientEvent('RSCore:Notify', xPlayer.PlayerData.source, "De race is al begonnen..", 'error')
                end
                TriggerClientEvent('RSCore:Notify', source, "Race stopgezet!", 'error')
                Races[key] = nil
            end
        end
        TriggerClientEvent('rs-streetraces:SetRace', -1, Races)
    else
        TriggerClientEvent('RSCore:Notify', source, "Je bent geen race gestart!", 'error')
    end
end

function RemoveFromRace(identifier)
    for key, race in pairs(Races) do
        if Races[key] ~= nil and not Races[key].started then
            for i, iden in pairs(Races[key].joined) do
                if iden == identifier then
                    table.remove(Races[key].joined, i)
                end
            end
        end
    end
end

function GetJoinedRace(identifier)
    for key, race in pairs(Races) do
        if Races[key] ~= nil and not Races[key].started then
            for _, iden in pairs(Races[key].joined) do
                if iden == identifier then
                    return key
                end
            end
        end
    end
    return 0
end

function GetCreatedRace(identifier)
    for key, race in pairs(Races) do
        if Races[key] ~= nil and Races[key].creator == identifier and not Races[key].started then
            return key
        end
    end
    return 0
end
