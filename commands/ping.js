const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Provides you with the latency.'),
  async execute(interaction) {
    const pingEmbed = new MessageEmbed()
      .setTitle('Ping Rates')
      .addField(
        'Message Latency',
        ` ${Date.now() - interaction.createdTimestamp} ms`
      )
      .addField('API Latency', `${Math.round(interaction.client.ws.ping)} ms`)
      .setColor('FFC910')
      .setFooter({ text: 'Latency numbers may be inaccurate.' })
      .setTimestamp()
    interaction.reply({ embeds: [pingEmbed] })
  }
}