const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageSelectMenu()
                .setCustomId('Bot-linkspanel')
                .setPlaceholder('❌┆Nothing selected')
                .addOptions([
                    {
                        label: `Support server`,
                        description: `Join the suppport server`,
                        emoji: "❓",
                        value: "support-linkspanel",
                    },
                    {
                        label: `Invite Bot`,
                        description: `Invite Bot to your server`,
                        emoji: "📨",
                        value: "invite-linkspanel",
                    },
                    {
                        label: `Invite Bot 2`,
                        description: `Invite Bot 2 to your server`,
                        emoji: "📕",
                        value: "invite2-linkspanel",
                    },
                    {
                        label: `Community Server`,
                        description: `Join the community server!`,
                        emoji: "🌍",
                        value: "community-linkspanel",
                    },
                ]),
        );

    client.embed({
        title: `🔗・Links`,
        desc: `Get access to all Bot links! Choose the link you need in the menu below`,
        image: "https://i.imgur.com/XMZw3Pm.png",
        components: [row],
        type: 'editreply'
    }, interaction)
}

 