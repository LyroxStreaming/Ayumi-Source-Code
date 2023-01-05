const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Get help with the bot'),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageSelectMenu()
                    .setCustomId('Bot-helppanel')
                    .setPlaceholder('❌ ┆ Nothing selected')
                    .addOptions([
                        {
                            label: `Commands`,
                            description: `Show The Commands Of Bot!`,
                            emoji: "<:uoBot_icon_slash:1030344688101756978>",
                            value: "commands-Bothelp",
                        },
                        {
                            label: `Invite`,
                            description: `Invite Bot To Your Server!`,
                            emoji: "<:add:1030391442142666783>",
                            value: "invite-Bothelp",
                        },
                        {
                            label: `Support server`,
                            description: `Join The Suppport Server!`,
                            emoji: "<:uo_BotSupport:1041207712148623412>",
                            value: "support-Bothelp",
                        },
                        {
                            label: `Changelogs`,
                            description: `Show The Bot Changelogs!`,
                            emoji: "<:uo_paper:1030342446812500098>",
                            value: "changelogs-Bothelp",
                        },
                    ]),
            );

        return client.embed({
            title: `<:uo_info:1030344062500356166>・Help panel`,
            desc: `Welcome to Bot's help panel! We have made a small overview to help you! Make a choice via the menu below`,
            image: "https://i.imgur.com/XMZw3Pm.png",
            fields: [
                {
                    name: `<:uo_BotSupport:1041207712148623412> ┆ Menu doesn't work?`,
                    value: `Try resending the command. If you get no reaction, make sure you report the bug!`
                },
                {
                    name: `<:uo_BotSupport:1015565238017470514>┆ Found a bug?`,
                    value: `Report this with \`/report bug\``
                },
                {
                    name: `<:to_space:1012038751729491968> ┆ Links`,
                    value: `[Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/992036764501942382/vote) | [Website](https://ayumibot.tk)`
                },
            ],
            components: [row],
            type: 'editreply'
        }, interaction)
    },
};

 