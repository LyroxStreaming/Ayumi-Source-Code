const Discord = require('discord.js');
const mojang = require('mojang-api');

module.exports = {
    name: 'uuid',
    description: 'Finds a player\'s uuid from the nickaname',
    args: '<nickname>',
    execute(interaction, args) {
        //check if there're arguments
        if(!args.length) {
            interaction.reply('please specify the player\'s name');
            return;
        }
        //send request to find uuid
        mojang.nameToUuid(args[0], (err, resp) => {
            if(err || !resp.length) {
                console.log(err);
                interaction.reply('there was an error');
            }
            else interaction.channel.send(resp[0].name + '\'s UUID is ' + resp[0].id);
        });
    }
}