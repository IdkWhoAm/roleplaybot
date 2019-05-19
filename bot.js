const Discord = require('discord.js');
const client = new Discord.Client();
var ida = {}
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (!message.channel.name === "рп") return;
	message.delete()
	if (!ida[message.author.id]) ida[message.author.id] = {}
	if (message.content.startsWith(':char')) {
		ida[message.author.id].char = message.content.substring(5)
		return
	};
	if (message.content.startsWith(':purge')) {
		let args = message.content.split(" ")
		if (isNaN(args[1])) return;
		if (args[1] > 100) return;
		message.channel.bulkDelete(args[1])
		return
	};
	if (message.content.startsWith(':me')) {
		message.channel.send(ida[message.author.id].char + " " + message.content.substring(4))
		return
	};
	if (message.content.startsWith('..')) {
		message.channel.send("\\" + ida[message.author.id].char + ": " + message.content.substring(3) + "\\")
		return
	};
	if (!ida[message.author.id].char) return;
	message.channel.send(ida[message.author.id].char + ": " + message.content)
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
