const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `LyroxStreaming`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `! Lyrox Streaming#0207`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Azure Esports`,
            inline: true,
        },
        {
            name: "🤖┆About Me",
            value: `AyuMi💖 Is A Full Advanced, Bot Fully Working With Slash Commands

Features : 
->     High Quality Music With A Control Panel
->     Low Latency Ping
->     Advanced Server Stats Channels
->     Activites
->     Advanced Embed Builder
->     Fully Advanced Moderation Commands
->     Advanced Giveaway Systems
->     Fun Commands
->     Advanced Announcement System
->     Many More !!

Try Me out !!

Invite Me : [/Invite](https://discord.com/api/oauth2/authorize?client_id=1057350197610557520&permissions=4398046511095&scope=bot)
Support : [/Bot Support](https://discord.gg/w2ybnv75Sw)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 