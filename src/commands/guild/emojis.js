const Discord = require('discord.js');
const axios = require("axios");

const model = require('../../database/models/badge');

module.exports = async (client, interaction, args) => {
  let Emojis = "";
  let EmojisAnimated = "";
  let EmojiCount = 0;
  let Animated = 0;
  let OverallEmojis = 0;

  function Emoji(id) {
    return client.emojis.cache.get(id).toString();
  }

  interaction.guild.emojis.cache.forEach((emoji) => {
    OverallEmojis++;
    if (emoji.animated) {
      Animated++;
      EmojisAnimated += Emoji(emoji.id);
    } else {
      EmojiCount++;
      Emojis += Emoji(emoji.id);
    }
  });

  client.embed({
    title: `<:huge_smile:1030388671016349737>・Emoji's!`,
    desc: `${OverallEmojis} Emoji's - ${interaction.guild.name}`,
    fields: [
      {
        name: `<a:emote:1030387549656596511> ┆ Animated [${Animated}]`,
        value: EmojisAnimated.substr(0, 1021) + "...",
        inline: false,
      },
      {
        name: `<a:emote:1030387549656596511> ┆ Standard [${EmojiCount}]`,
        value: Emojis.substr(0, 1021) + "...",
        inline: false,
      },
    ],
    type: 'editreply'
  }, interaction)
}

 