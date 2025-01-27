Keys = {
	['ESC'] = 322, ['F1'] = 288, ['F2'] = 289, ['F3'] = 170, ['F5'] = 166, ['F6'] = 167, ['F7'] = 168, ['F8'] = 169, ['F9'] = 56, ['F10'] = 57,
	['~'] = 243, ['1'] = 157, ['2'] = 158, ['3'] = 160, ['4'] = 164, ['5'] = 165, ['6'] = 159, ['7'] = 161, ['8'] = 162, ['9'] = 163, ['-'] = 84, ['='] = 83, ['BACKSPACE'] = 177,
	['TAB'] = 37, ['Q'] = 44, ['W'] = 32, ['E'] = 38, ['R'] = 45, ['T'] = 245, ['Y'] = 246, ['U'] = 303, ['P'] = 199, ['['] = 39, [']'] = 40, ['ENTER'] = 18,
	['CAPS'] = 137, ['A'] = 34, ['S'] = 8, ['D'] = 9, ['F'] = 23, ['G'] = 47, ['H'] = 74, ['K'] = 311, ['L'] = 182,
	['LEFTSHIFT'] = 21, ['Z'] = 20, ['X'] = 73, ['C'] = 26, ['V'] = 0, ['B'] = 29, ['N'] = 249, ['M'] = 244, [','] = 82, ['.'] = 81,
	['LEFTCTRL'] = 36, ['LEFTALT'] = 19, ['SPACE'] = 22, ['RIGHTCTRL'] = 70,
	['HOME'] = 213, ['PAGEUP'] = 10, ['PAGEDOWN'] = 11, ['DELETE'] = 178,
	['LEFT'] = 174, ['RIGHT'] = 175, ['TOP'] = 27, ['DOWN'] = 173,
}

RSCore = nil

Citizen.CreateThread(function()
	while RSCore == nil do
		TriggerEvent('RSCore:GetObject', function(obj) RSCore = obj end)
		Citizen.Wait(10)
	end
end)

RegisterNetEvent('RSCore:Client:OnPlayerLoaded')
AddEventHandler('RSCore:Client:OnPlayerLoaded', function()
    TriggerServerEvent("rs-admin:server:loadCompanies")
end)

RegisterNetEvent('rs-companies:client:setCompanies')
AddEventHandler('rs-companies:client:setCompanies', function(companiesList)
	Config.Companies = companiesList
	print("Companies Loaded :)")
end)

function GetCompanies()
	local companyList = {}
	if Config.Companies ~= nil then 
		for name, company in pairs(Config.Companies) do
			if company.owner == RSCore.Functions.GetPlayerData().citizenid then
				companyList[company.name] = {
					name = company.name,
					label = company.label,
					rank = Config.MaxRank,
				}
			elseif company.employees ~= nil then 
				if company.employees[RSCore.Functions.GetPlayerData().citizenid] ~= nil then 
					companyList[company.name] = {
						name = company.name,
						label = company.label,
						rank = company.employees[RSCore.Functions.GetPlayerData().citizenid].rank,
					}
				end
			end
		end
	end
	return companyList
end

function GetCompanyRank(companyName)
	local rank = 0
	if Config.Companies[companyName] ~= nil then 
		if Config.Companies[companyName].employees ~= nil then 
			if Config.Companies[companyName].employees[RSCore.Functions.GetPlayerData().citizenid] ~= nil then 
				rank = Config.Companies[companyName].employees[RSCore.Functions.GetPlayerData().citizenid].rank
			elseif Config.Companies[companyName].owner == RSCore.Functions.GetPlayerData().citizenid then
				rank = Config.MaxRank
			end
		else
			if Config.Companies[companyName].owner == RSCore.Functions.GetPlayerData().citizenid then
				rank = Config.MaxRank
			end
		end
	end
	return rank
end

function IsEmployee(companyName)
	local retval = false
	if Config.Companies[companyName] ~= nil then 
		if Config.Companies[companyName].employees ~= nil then 
			if Config.Companies[companyName].employees[RSCore.Functions.GetPlayerData().citizenid] ~= nil then 
				retval = true
			elseif Config.Companies[companyName].owner == RSCore.Functions.GetPlayerData().citizenid then
				retval = true
			end
		else
			if Config.Companies[companyName].owner == RSCore.Functions.GetPlayerData().citizenid then
				retval = true
			end
		end
	end
	return retval
end

function GetCompanyInfo(companyName)
	local retval = nil
	if Config.Companies[companyName] ~= nil then 
		retval = Config.Companies[companyName]
	end
	return retval
end

