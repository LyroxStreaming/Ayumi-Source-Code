const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Get an invite to the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        let row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setLabel("Invite")
                    .setURL(client.config.discord.botInvite)
                    .setStyle("LINK"),

                new Discord.MessageButton()
                    .setLabel("Support server")
                    .setURL(client.config.discord.serverInvite)
                    .setStyle("LINK"),
            );

        client.embed({
            title: `<:add:1030391442142666783>・Invite`,
            desc: `Make your server even better with Bot!`,
            image: "https://i.imgur.com/XMZw3Pm.png",
            url: client.config.discord.botInvite,
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 