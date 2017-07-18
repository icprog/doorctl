-- file: relay.lua
local module = {} 
pin = 0
status = 0

function module.rlyctl()
	gpio.mode(pin,gpio.OUTPUT)
	status = status + 1
	status = status%2
	print("setting Relay status")
	if status == 0 then
		gpio.write(pin,gpio.HIGH)
	else
		gpio.write(pin,gpio.LOW)
	end
end

return module  