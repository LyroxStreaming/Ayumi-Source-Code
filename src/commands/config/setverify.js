const Discord = require('discord.js');

const Schema = require("../../database/models/verify");

module.exports = async (client, interaction, args) => {
    const perms = await client.checkUserPerms({
        flags: [Discord.Permissions.FLAGS.MANAGE_MESSAGES],
        perms: ["MANAGE_MESSAGES"]
    }, interaction)

    if (perms == false) return;

    const boolean = interaction.options.getBoolean('enable');
    const channel = interaction.options.getChannel('channel');
    const role = interaction.options.getRole('role');

    if (boolean == true) {
        const data = await Schema.findOne({ Guild: interaction.guild.id });
        if (data) {
            data.Channel = channel.id;
            data.Role = role.id
            data.save();
        }
        else {
            new Schema({
                Guild: interaction.guild.id,
                Channel: channel.id,
                Role: role.id
            }).save();
        }

        client.succNormal({
            text: `Verify panel has been successfully created`,
            fields: [
                {
                    name: `<:channel:1048798881548353556>┆Channel`,
                    value: `${channel} (${channel.name})`,
                    inline: true
                },
                {
                    name: `<:unknown:1041219007161839696>┆Role`,
                    value: `${role} (${role.name})`,
                    inline: true
                }
            ],
            type: 'editreply'
        }, interaction);

        const row = new Discord.MessageActionRow()
            .addComponents(
                new Discord.MessageButton()
                    .setCustomId('Bot_verify')
                    .setEmoji('<:verified:1044995386181419068>')
                    .setStyle('SECONDARY'),
            );

        client.embed({
            title: `<:verify:1048801136720748646> Verification Required!`,
            desc: `<:alerm:1048801134757818518> **To access \`${interaction.guild.name}\`, you need to pass the verification first.**\n\<:rightshort:1048801132627120201> Press on the **Verify** button below.`,
            components: [row]
        }, channel)
    }
}

 