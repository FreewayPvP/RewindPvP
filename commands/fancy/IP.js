const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            group: 'fancy',
            memberName: 'info',
            description: 'With this command you can see our Server Info!',
        });
    }

async run(message, args) {
    const embed = new Discord.RichEmbed()
    
    .setTitle(">> Server Site <<") 
    .setAuthor("Author: FreewayPvP", "https://i.imgur.com/7fYdmzp.png")
    
    .setColor(0x00AE86)
      .setDescription(" ")
    
      .setFooter("© All Rights Reserve to: Freeway™")
      .setImage("https://i.imgur.com/4s3jkpr.png")
    
     .setTimestamp()
    
      .setURL("http://rewindpvpz.buycraft.net/")
      .addField("Server Owner:",
        "@C𝔞𝔩𝔞B𝒶𝑒 ✓ᵛᵉʳᶦᶠᶦᵉᵈ#9120")
      .addField("Server IP:",
        "play.NoServerIPYet.com")
        .addField("Discord Invite Link:",
        "https://discord.gg/nJ4B4uf")


    
    message.channel.send({embed}) // Will send the embed that is define as "const embed"

}};

module.exports = EmbedCommand;