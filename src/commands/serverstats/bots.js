const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
    const members = await interaction.guild.members.fetch();

    var channelName = await client.getTemplate(interaction.guild);
    channelName = channelName.replace(`{emoji}`, "[ 🔵 ]")
    channelName = channelName.replace(`{name}`, ` ʙᴏᴛꜱ・ ${members.filter(member => member.user.bot).size || 0}`)

    await interaction.guild.channels.create(channelName, {
        type: 'GUILD_VOICE', permissionOverwrites: [
            {
                deny: 'CONNECT',
                id: interaction.guild.id
            },
        ],
    }).then(async (channel) => {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.Bots = channel.id;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Bots: channel.id
                }).save();
            }
        })

        client.succNormal({
            text: `Bots count created!`,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel}`
                }
            ],
            type: 'editreply'
        }, interaction);
    })

}

 