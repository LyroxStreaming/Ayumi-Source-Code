const { Client, MessageEmbed, CommandInteraction, MessageButton, MessageActionRow, MessageSelectMenu } = require("discord.js");
const developers = "<your id>";
 module.exports = {
     name: "servers",
     description: "List all the servers, in which bot is in.",
     run: async (client, interaction, args) => {
       let msg = await interaction.followUp({ content: `Fetching..` })
       if (!interaction.user.id == developers) return msg.edit({ content: `Only my developers can use this command.`, ephemeral: true})
       let array = []
       client.guilds.cache.forEach(async(x) => {
           array.push(`${x.name} [${x.memberCount}]`);
           return msg.edit(`${array.join("\n")}`)
       });
     },
 };