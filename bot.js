var Discordie = require("discordie");
var client = new Discordie();

var prefix = "@";

var found = true;

client.connect({
	token: "NUTHIN TO SEE HERE"
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
