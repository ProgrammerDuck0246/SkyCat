const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('timer')
    .setDescription('Provides you a timer to measure the time')
    .addNumberOption((option) =>
      option
        .setName('countdown')
        .setDescription('Countdown time you want to set to in seconds.')
        .setRequired(true)
    ),
  async execute(interaction) {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    let timer = interaction.options.getNumber('countdown')
    interaction.reply('Timer Set!')
    while (timer !== 0) {
      timer--
      await delay(1000)
    }
    interaction.channel.send(`${interaction.user} Timer ended!`)
  }
}
