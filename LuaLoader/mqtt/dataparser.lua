-- file : dataparser.lua
local module = {} 

local function parser(data)
	jsondata = cjson.decode(data)
	for k,v in pairs(jsondata) do print(k,v) end
	-- print(jsondata["a"])
end


function module.parsedata(data)
	if pcall(parser, data) then
		print("Parse data success!")
	else
		print("Parse data failure! Please ensure you input a json format string data.")
	end
end

return module