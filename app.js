const Commando = require('discord.js-commando');
const Discord = require('discord.js');

const client = new Commando.Client({
	owner: '367910644181368833'
});

const config = require("./config.json");

client.on('ready', () => {
  console.log(`Hey, I Just Finished Starting up! You can now use me in Discord!`);
});

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setGame(`with @FreewayPvP#6468`);
    client.user.setStatus('dnd');
    client.user.setGame(`with @FreewayPvP#6468`, 'https://www.twitch.tv/thomaspvp5');
});

const path = require('path');

client.registry
  .registerGroups([
		['cool', 'Cool commands'],
		['fancy', 'fancy Commands'],
		['games', 'Game Commands'],
		['alts', 'alt Commands'],
		['fun', 'Fun Commands']
    ])
    
    .registerDefaultGroups()
    .registerDefaultTypes()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'))

client.login('Mzk0MDQ4NjE1NTM1ODY5OTUy.DR-62Q.InKrgeXQp1qtyhJK60Nm4iVxZBg');
