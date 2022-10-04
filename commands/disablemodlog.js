const db = require("quick.db")

module.exports = {
    name: "disablemodlog",

    async run (client, message, args) {
		if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:no:784463793366761532> **You can not use this command | Permission: ADMINISTRATOR**')
		if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('<a:no:784463793366761532> **I do not have the correct permissions | Permission : MANAGE_CHANNELS**')
        try {
            let a = db.fetch(`modlog_${message.guild.id}`)

            if (!a) {
                return message.channel.send('<a:no:784463793366761532> **There Is No Modlog Channel Set To Disable**')
            } else {
                let channel = message.guild.channels.cache.get(a)
                client.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("<a:no:784463793366761532> **ModLog Channel Disabled**")
                db.delete(`modlog_${message.guild.id}`)

                message.channel.send(`<a:yes:784463701305458708> **Modlog Channel Has Been Successfully Disabled in \`${channel.name}\`**`)
            }
            return;
        } catch {
            return message.channel.send("<a:no:784463793366761532> **Error - `Missing Permissions or Channel Doesn't Exist`**")
        }
	}
}