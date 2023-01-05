const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const members = await interaction.guild.members.fetch();

  client.embed({
    title: `<:member:1025604397201375243>・Membercount`,
    desc: `View the total number of members in the server`,
    fields: [
      {
        name: `<:member:1025604397201375243> ┆ Members`,
        value: `${members.filter(member => !member.user.bot).size} members`,
        inline: true
      },
      {
        name: `<:member:1025604397201375243> ┆ Bots`,
        value: `${members.filter(member => member.user.bot).size} bots`,
        inline: true
      },
      {
        name: `<:member:1025604397201375243> ┆ Total`,
        value: `${interaction.guild.memberCount} members`,
        inline: true
      }
    ],
    type: 'editreply'
  }, interaction)
}

   