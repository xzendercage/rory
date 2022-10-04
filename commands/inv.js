const colors = require('../colors.json')
const Discord = require('discord.js');

module.exports = {
    name: "inv",

    async run (client, message, args) {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const inv = new Discord.MessageEmbed()
		.setColor(colors.main)
		.setTitle('Invite')
		.setDescription('**Support us by inviting DevEvilBot.xyz to your server :heart:** \n**[Click Here](https://discord.com/oauth2/authorize?client_id=1026801321426300999&scope=bot&permissions=8)**', true)
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(inv)
	}
}