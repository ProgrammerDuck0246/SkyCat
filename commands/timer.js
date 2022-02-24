const { SlashCommandBuilder } = require('@discordjs/builders')
module.exports = {
  data: new SlashCommandBuilder()
    .setName('timer')
    .setDescription('Provides you a timer to measure the time')
    .addNumberOption((option) =>
      option
        .setName('countdown')
        .setDescription('Countdown timer you want to set to.')
        .setRequired(true)
    ),
  async execute(interaction) {
    const timer = interaction.options.getNumber('countdown')
    if (timer >= 1) {
      timer--
    }
    if (timer == 0) {
      interaction.reply('Timer ended!')
    }
  }
}
