const Discord = require('discord.js');
const client = new Discord.Client();
const char = {}
client.on('ready', () => {
    console.log('I am ready!');
	char["Ok"] = "Hey Buddy"
});

client.on('message', message => {
	if (!message.channel.name === "рп") return;
	message.delete()
	if (message.content.substring(0,5) == ":test") {
		message.channel.send("${char["Ok"]} lol")
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
