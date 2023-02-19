import { GatewayIntentBits, Interaction, SlashCommandBuilder } from 'discord.js'
import { CommandBase } from '../structures/CommandBase'

export const ping2Command: CommandBase = {

  name: 'ping2',

  async execute (interaction: Interaction): Promise<void> {

    // guard
    if (!interaction.isChatInputCommand()) return

    await interaction.reply('Pong! this is pong 2')

    return
  },

  slashCommandBuilder: new SlashCommandBuilder()
    .setName('ping2')
    .setDescription('ping2 dayo!')

}
