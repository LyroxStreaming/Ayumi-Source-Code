const Discord = require('discord.js');

module.exports = async (client) => {
    const fields = [
        {
            name: `<:uo_tv:1030307174158704661> ┆ Activities`,
            value: `\`/activities\``,
            inline: true
        },
        {
            name: `<:blue_snowflake:1030387843232706620> ┆ AFK`,
            value: `\`/afk help\``,
            inline: true
        },
        {
            name: `<:mega_phone:1030387961088446475> ┆ Announcement`,
            value: `\`/announcement help\``,
            inline: true
        },
        {
            name: `<:mod_shield:1030388175178321971> ┆ Auto mod`,
            value: `\`/automod help\``,
            inline: true
        },
        {
            name: `<:settings:1030388276441387060> ┆ Auto setup`,
            value: `\`/autosetup help\``,
            inline: true
        },
        {
            name: `<:presentgift:1030388349816541214> ┆ Birthday`,
            value: `\`/birthdays help\``,
            inline: true
        },
        {
            name: `<:bot:1025604558396854332> ┆ Bot`,
            value: `\`/bot help\``,
            inline: true
        },
        {
            name: `<:huge_smile:1030388671016349737> ┆ Casino`,
            value: `\`/casino help\``,
            inline: true
        },
        {
            name: `<:settings:1030388276441387060> ┆ Configuration`,
            value: `\`/config help\``,
            inline: true
        },
        {
            name: `<:blue_stars:1030388958590418994> ┆ Custom commands`,
            value: `\`/custom-commands help\``,
            inline: true
        },
        {
            name: `<:uo_credit:1030389307166441524> ┆ Dcredits`,
            value: `\`/dcredits help\``,
            inline: true
        },
        {
            name: `<:uo_dcoin:1030386707511652352> ┆ Economy`,
            value: `\`/economy help\``,
            inline: true
        },
        {
            name: ` <:blue_stars:1030388958590418994> ┆ Family`,
            value: `\`/family help\``,
            inline: true
        },
        {
            name: `<:huge_smile:1030388671016349737> ┆ Fun`,
            value: `\`/fun help\``,
            inline: true
        },
        {
            name: `<:to_space:1030389865516388402> ┆ Games`,
            value: `\`/games help\``,
            inline: true
        },
        {
            name: `<:uo_party:1030343950478884874> ┆ Giveaway`,
            value: `\`/giveaway help\``,
            inline: true
        },
        {
            name: `<:discord:1040987816814981130> ┆ Guild settings`,
            value: `\`/guild help\``,
            inline: true
        },
        {
            name: `<:image:1040987963145863198> ┆ Images`,
            value: `\`/images help\``,
            inline: true
        },
        {
            name: `<:add:1040987917998379058> ┆ Invites`,
            value: `\`/invites help\``,
            inline: true
        },
        {
            name: `<:to_space:1030389865516388402> ┆ Leveling`,
            value: `\`/levels help\``,
            inline: true
        },
        {
            name: `<:values:1040899126893740053> ┆ Messages`,
            value: `\`/messages help\``,
            inline: true
        },
        {
            name: `<:mod_shield:1030388175178321971> ┆ Moderation`,
            value: `\`/moderation help\``,
            inline: true
        },
        {
            name: ` <:uo_music:1030336901443502090> ┆ Music`,
            value: `\`/music help\``,
            inline: true
        },
        {
            name: ` <:uo_paper:1030342446812500098> ┆ Notepad`,
            value: `\`/notepad help\``,
            inline: true
        },
        {
            name: `<:member:1012017243837702174> ┆ Profile`,
            value: `\`/profile help\``,
            inline: true
        },
        {
            name: `<:uo_voice_channel:1015566886303440906> ┆ Radio`,
            value: `\`/radio help\``,
            inline: true
        },
        {
            name: `<:huge_smile:1012038461357817968> ┆ Reaction roles`,
            value: `\`/reactionroles help\``,
            inline: true
        },
        {
            name: `<:ways:1012018245429121075> ┆ Search`,
            value: `\`/search help\``,
            inline: true
        },
        {
            name: `<:plane:1012017388440531015> ┆ Server stats`,
            value: `\`/serverstats help\``,
            inline: true
        },
        {
            name: `<:settings:1012018247031328868> ┆ Setup`,
            value: `\`/setup help\``,
            inline: true
        },
        {
            name: `<:ways:1012018245429121075> ┆ Soundboard`,
            value: `\`/soundboard help\``,
            inline: true
        },
        {
            name: `<:hashtag:1012018249854091415> ┆ Sticky messages`,
            value: `\`/stickymessages help\``,
            inline: true
        },
        {
            name: `<:heart_blue:1012017400314613761> ┆ Suggestions`,
            value: `\`/sugestions help\``,
            inline: true
        },
        {
            name: ` <:beIl:1012017395910594620> ┆ Thanks`,
            value: `\`/thanks help\``,
            inline: true
        },
        {
            name: `<:blue_ticket:1012017313878388816> ┆ Tickets`,
            value: `\`/tickets help\``,
            inline: true
        },
        {
            name: `<:blue_hammers:1012018248163786763> ┆ Tools`,
            value: `\`/tools help\``,
            inline: true
        },
        {
            name: `<:uo_voice_channel:1015566886303440906> ┆ Voice`,
            value: `\`/voice help\``,
            inline: true
        },
    ];

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "Bot-helppanel") {
            if (interaction.values == "commands-Bothelp") {
                interaction.deferUpdate();
                let page = 1;

                const row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setCustomId('helpPrev')
                            .setEmoji('<a:Blue_Arrow_Left:1031136871809568808>')
                            .setStyle('SECONDARY'),

                        new Discord.MessageButton()
                            .setCustomId('helpNext')
                            .setEmoji('<a:Blue_Arrow_Right:1031136874481332234>')
                            .setStyle('SECONDARY'),

                        new Discord.MessageButton()
                            .setLabel("Invite")
                            .setURL("https://discord.com/api/oauth2/authorize?client_id=1057350197610557520&permissions=4398046511095&scope=bot")
                            .setStyle("LINK"),

                        new Discord.MessageButton()
                            .setLabel("Support server")
                            .setURL("https://discord.gg/WADxBybPNf")
                            .setStyle("LINK"),
                    );

                const row2 = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageSelectMenu()
                            .setCustomId('Bot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Bot!`,
                                    emoji: "<:uoBot_icon_slash:1030344688101756978>",
                                    value: "commands-Bothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Bot to your server`,
                                    emoji: "<:add:1030391442142666783>",
                                    value: "invite-Bothelp",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "<:uo_BotSupport:1041207712148623412>",
                                    value: "support-Bothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "<:uo_paper:1030342446812500098>",
                                    value: "changelogs-Bothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: `<:uo_BotSupport:1041207712148623412>・Help panel`,
                    desc: `View all command categories in the bot here! \n\n[Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/992036764501942382/vote) | [website](https://ayumibot.tk) `,
                    image: "https://i.imgur.com/XMZw3Pm.png",
                    fields: fields.slice(0, 24),
                    components: [row2, row],
                    type: 'edit'
                }, interaction.message).then(msg => {
                    const filter = i => i.user.id === interaction.user.id;

                    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 100000 });

                    collector.on('collect', async i => {
                        if (i.customId == "helpNext") {
                            if (page == 1) {
                                client.embed({
                                    title: `<:uo_BotSupport:1041207712148623412>・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/992036764501942382/vote)`,
                                    fields: fields.slice(25, 49),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page += 1;
                            }
                        }

                        else if (i.customId == "helpPrev") {
                            if (page == 2) {
                                client.embed({
                                    title: `<:uo_BotSupport:1030648724751401051>・Help panel`,
                                    desc: `View all command categories in the bot here! \n\n[Invite](${client.config.discord.botInvite}) | [Vote](https://top.gg/bot/992036764501942382/vote)`,
                                    fields: fields.slice(0, 24),
                                    components: [row2, row],
                                    type: 'update'
                                }, i)
                                page -= 1;
                            }
                        }
                    });
                })
            }
        }
    }).setMaxListeners(0);
}

 