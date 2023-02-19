import { Awaitable } from '@discordjs/util'
import { ClientEvents, Events, SlashCommandBuilder } from 'discord.js'

export interface CommandBase {
  name: string

  slashCommandBuilder: SlashCommandBuilder
  execute: (...args: ClientEvents[Events.InteractionCreate]) => Awaitable<void>
}
