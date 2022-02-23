const { REST } = require('@discordjs/rest')
const { Routes } = require('discord-api-types/v9')
const { token, clientId, guildId } = require('./config.json')
const logger = require('./utils/logger')
const fs = require('fs')

const commands = []
const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(token)

;(async () => {
  try {
    logger.info('Started refreshing application (/) commands.')

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands
    })

    logger.info('Successfully reloaded application (/) commands.')
  } catch (error) {
    logger.error(error)
  }
})()
