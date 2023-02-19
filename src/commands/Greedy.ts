import { GatewayIntentBits, Interaction, SlashCommandBuilder } from 'discord.js'
import { CommandBase } from '../structures/CommandBase'

export const greedyCommand: CommandBase = {

  name: 'greedy',

  async execute (interaction: Interaction): Promise<void> {

    // guard
    if (!interaction.isChatInputCommand()) return

    await interaction.reply(`Hi, ${interaction.user.username}`)

    return
  },

  slashCommandBuilder: new SlashCommandBuilder()
    .setName('greedy')
    .setDescription('greedy dayo!')

}
