const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'author',
            group: 'fancy',
            memberName: 'author',
            description: 'With this command you can see our Author\'s Info!',
        });
    }

async run(message, args) {
    message.delete('1')
    const embed = new Discord.RichEmbed()
    
    .setTitle(">> Server Site <<") 
    .setAuthor("-=> INFO <=-", "https://i.imgur.com/a/awjhq.png")
    
    .setColor(0x00AE86)
      .setDescription(" ")
    
      .setFooter("© All Rights Reserve to: Freeway™")
      .setImage("https://i.imgur.com/a/awjhq.png")
    
     .setTimestamp()
    
      .setURL("https://discord.gg/AxGBRt5")
      .addField("Server Owner:",
        "ℱคภςץ | Savage#6468")
        .addField("Discord:",
        "Come and Join The Author's Server!\nWe Always Have FUN.. FUN... FUNNNN\nIf You Advertise or Spam in that Server\nYou Will Automaticlly Be PERM banned!\nhttps://discord.gg/AxGBRt5")


    
    message.channel.send({embed}) // Will send the embed that is define as "const embed"

}};

module.exports = EmbedCommand;
