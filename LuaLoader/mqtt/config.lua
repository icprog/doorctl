-- file : config.lua
local module = {}

module.SSID = {}  
module.SSID["Lexin_Smart"] = "lexin123"

module.HOST = "180.76.179.148"  
module.PORT = 1883  
module.ID = node.chipid()

module.ENDPOINT = "lexinsmart/"  
return module  