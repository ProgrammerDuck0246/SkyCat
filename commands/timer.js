const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('timer')
    .setDescription('Provides you a timer to measure the time'),
  async execute(interaction) {
    client.on('message', msg => {
        if (msg == '1') {
          let time = 5;
          let interval = setInterval(() => {
            msg.channel.send(duration --);
            if (time < 1) {
              clearInterval(interval);
            }
          }, 1000)
      
          
        }
      })
  }
}