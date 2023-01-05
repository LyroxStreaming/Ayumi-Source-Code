const Discord = require('discord.js');
const chalk = require('chalk');

module.exports = async (client) => {
  const activities = [
        { name: `/help | AyuMi`, type: 2 }, // LISTENING
        { name: `/help | AyuMi`, type: 0 }, // PLAYING
        { name: `/help | AyuMI`, type: 3 }, // WATCHING
    ];
    const status = [
        'online',
        'dnd',
        'idle'
    ];
    let i = 0;
    setInterval(() => {
        if(i >= activities.length) i = 0
        client.user.setActivity(activities[i])
        i++;
    }, 5000);
  
    let s = 0;
    setInterval(() => {
        if(s >= activities.length) s = 0
        client.user.setStatus(status[s])
        s++;
    }, 30000);

    client.player.init(client.user.id);    
  console.log(chalk.blue(chalk.bold(`System`)), (chalk.white(`>>`)), chalk.red(`${client.user.username}`), chalk.green(`is ready!`))
}

 