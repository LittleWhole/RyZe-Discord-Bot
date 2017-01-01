var Discordie = require('discordie');

const Events = Discordie.events
const client = new Discordie();

client.Dispatcher.on(Events.GATEWAY_READY, e => {
    console.log('Connected as: ' + client.User.Username);
});
