var mqttServer_url = 'mqtt 服务器地址';
var mqttServer_port= 'mqtt 端口';
var clientID = 	Math.random().toString(36).substr(2);
var topic = "门锁对应的mqtt topic";
var client = null;
var message = new Paho.MQTT.Message("Hello");

// Create a client instance
client = new Paho.MQTT.Client(mqttServer_url, Number(mqttServer_port), clientID);
// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe(topic);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}

function sendMsg(topic, msg, doorStatus){
  message = new Paho.MQTT.Message(msg);
  message.destinationName = topic;
  client.send(message);
  $('#msgStatus').text(doorStatus + '信息已经发送');
}
