const commando = require('discord.js-commando');
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

class EmbedCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'embed',
            group: 'fancy',
            memberName: 'embed',
            description: 'Embed....',
        });
    }

async run(message, args) {
    const embed = new Discord.RichEmbed()
    
    .setTitle("Test Message!") 
    .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
    
    .setColor(0x00AE86)
      .setDescription("This is the main body of text, it can hold 2048 characters.")
    
      .setFooter("This is the footer text, it can hold 2048 characters")
      .setImage("http://i.imgur.com/yVpymuV.png")
    
      .setThumbnail("http://i.imgur.com/p2qNFag.png")
     .setTimestamp()
    
      .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
      .addField("This is a field title, it can hold 256 characters",
        "This is a field value, it can hold 2048 characters.")
    
    .addBlankField(true)
    .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
    
    message.channel.send({embed}) // Will send the embed that is define as "const embed"

}};

module.exports = EmbedCommand;