const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const role = interaction.options.getRole('role');
  const perms = new Discord.Permissions(role.permissions.bitfield).toArray();

  client.embed({
    title: `<:uo_info:1030344062500356166>・Role information`,
    thumbnail: interaction.guild.iconURL({ dynamic: true, size: 1024 }),
    desc: `Information about the role ${role}`,
    fields: [
      {
        name: '<a:emote:1030387549656596511> ┆ Role ID:',
        value: `${role.id}`,
        inline: true
      },
      {
        name: '<a:emote:1030387549656596511> ┆ Role Name:',
        value: `${role.name}`,
        inline: true
      },
      {
        name: '<a:emote:1030387549656596511> ┆ Mentionable:',
        value: `${role.mentionable ? 'Yes' : 'No'}`,
        inline: true
      },
      {
        name: '<a:emote:1030387549656596511> ┆ Role Permissions:',
        value: `${perms.join(', ')}`
      }
    ],
    type: 'editreply'
  }, interaction)
}

   