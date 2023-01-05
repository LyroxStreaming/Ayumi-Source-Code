const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setLabel("Support server")
                .setURL(client.config.discord.serverInvite)
                .setStyle("LINK"),
        );

    client.embed({
        title: `❓・Support`,
        desc: `Make your server even better with Bot!`,
        image: "https://i.imgur.com/XMZw3Pm.png",
        url: client.config.discord.serverInvite,
        components: [row],
        type: 'editreply'
    }, interaction)
}

 