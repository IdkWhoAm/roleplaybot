const Discord = require('discord.js');
const client = new Discord.Client();
var ida = {}
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (!message.channel.name === "рп") return;
	message.delete()
	if (!ida[message.author.id]) ida[message.author.id] = {}
	if (message.content.startsWith(':char')) {
		ida[message.author.id].char = message.content.substring(5)
		return
	};
	if (message.content.startsWith(':me')) {
		message.channel.send(ida[message.author.id].char + " " + message.content)
		return
	};
	if (!ida[message.author.id].char) return;
	message.channel.send(ida[message.author.id].char + ": " + message.content)
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
