const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
let userdata = JSON.parse(fs.readFileAsync('userData.json','utf8');
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
	if (!message.channel.name === "рп") return;
	var kar = false
	if (message.content.startsWith(':char')) {
		if (!userdata[message.author.id + message.guild.id]) userdata[message.author.id + message.guild.id] = {};
		userdata[message.author.id + message.guild.id] = message.content.substring(5);
		kar = true
	};
	if (message.content.startsWith(':me')) {
		message.channel.send(message.content.substring
		
	if (!message.channel.name === "рп") return;
	message.delete();
	if (!userdata[message.author.id + message.guild.id]) userdata[message.author.id + message.guild.id] = {}
	if (!userdata[message.author.id + message.guild.id].char) userdata[message.author.id] + message.guild.id].char = 'NoOne'
	if (kar === false) {
		message.channel.send(userdata[message.author.id + message.guild.id] + ":${message.content}")
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
