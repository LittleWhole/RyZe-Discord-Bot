var Discordie = require("discordie");
var client = new Discordie();

var prefix = "@";

var found = true;

client.connect({
	token: "MjY0OTM1OTg0ODU0OTkwODQ5.C0rkSg.-ZaCg1qWKDD8VXCscPN6rF2L3V0"
});

// USE // FOR COMMENTS

client.Dispatcher.on("GATEWAY_READY", e => {
	console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on("MESSAGE_CREATE", e => {
	if (e.message.content. == "@ping") {
    e.message.channel.sendMessage("Pong!");
  }
});
