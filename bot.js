const Discord = require('discord.js');
const client = new Discord.Client();
var ida = {}
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (!message.channel.name === "рп") return;
	if (!ida[message.author.id]) ida[message.author.id] = {}
	if (message.content.startsWith(':char')) {
		ida[message.author.id].char = message.content.substring(5)
		return
	};
	if (!ida[message.author.id]) return
	message.channel.send(message.content)
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
