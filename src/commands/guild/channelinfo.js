const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
  const channel = interaction.options.getChannel('channel');

  client.embed({
      title: `<:uo_info:1030344062500356166>・Channel information`,
      desc: `Channel information about: <#${channel.id}>`,
      fields: [
          {
              name: "<a:emote:1030387549656596511> ┆ Type",
              value: `${channel.type}`,
              inline: true,
          },
          {
              name: "<a:emote:1030387549656596511> ┆ ID",
              value: `${channel.id}`,
              inline: true,
          },
          {
              name: "<a:emote:1030387549656596511> ┆ Type",
              value: `${channel.type}`,
              inline: true,
          },
          {
              name: "<a:emote:1030387549656596511> ┆ Made on",
              value: `${channel.createdAt}`,
              inline: true,
          },
          {
              name: "<a:emote:1030387549656596511> ┆ Subject",
              value: `${channel.topic ? channel.topic : 'N/A'}`,
              inline: true,
          },
          {
              name: "<a:emote:1030387549656596511> ┆ NSFW",
              value: `${channel.nsfw}`,
              inline: true,
          },
          {
              name: "<a:emote:1030387549656596511> ┆ Parent",
              value: `${channel.parentID ? channel.parentID : 'N/A'}`,
              inline: true,
          },
      ],
      type: 'editreply'
  }, interaction)
}

   