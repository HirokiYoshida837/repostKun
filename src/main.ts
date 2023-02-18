import {
  CacheType,
  ChannelType,
  Client,
  GatewayIntentBits, Interaction, Message,
} from 'discord.js'

import * as dotenv from 'dotenv'
import { checkContentContainsTargetWord } from './core/ContentCheck'

// loading .env
dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
})

const guildChannelMap = new Map<string, string>()



// ログイン成功後に動く
client.on('ready', async () => {

  console.log(`Logged in as ${client.user?.tag}, Logged in to  ${client.guilds.cache.size} guilds.`)

  console.log(`start initialize process.`)

  console.log(`searching repost target channels...`)

  client.guilds.cache
    .filter(x => x != undefined)
    .forEach(g => {

      const ch = g.channels.cache
        .filter(x => x.type == ChannelType.GuildText)
        // youtubeを貼るチャンネル固定
        .filter(x => x.name.startsWith('youtube'))
        .filter(x => x.isTextBased())
        .first()

      if (ch) {
        guildChannelMap.set(ch.guildId, ch.id)
      }

    })

  console.log(`search repost target channels complete.`)
  console.log(`discord repostkun is ready!`)

})

// mentionで動く
client.on('interactionCreate', async (interaction: Interaction<CacheType>) => {

  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!')
  }
})

// 新着メッセージを見たときに動く
client.on('messageCreate', async (message: Message) => {

  if (message.author.bot) return

  if (!message.guildId || !message.guild) {
    console.warn(`not found guildId`)
    return
  }

  if (guildChannelMap.get(message.guildId) == message.channelId) {
    // 同じチャンネルの場合は無視
    return
  }

  if (checkContentContainsTargetWord(message.content)) {

    const targetChId = guildChannelMap.get(message.guildId)

    if (!targetChId) {
      console.warn(`Cannot found targetChId on guild : ${message.guild}`)
      return
    }

    const targetCh = message.guild.channels.cache.get(targetChId)

    if (targetCh?.isTextBased()) {

      console.log(`starting repost process.`)

      try {

        // 元投稿のembedsは邪魔なので消す
        const edit = await message.suppressEmbeds(true)
        console.info(`remove embeds from original post.  ${edit.guildId}, ${edit.channelId}, ${edit.id}, ${edit.editedAt?.toDateString()}`)

        // repost先にrepost
        const repost = await targetCh.send(`${message.content} [repost from ${message.author.username}'s post]`)
        console.info(`repost to targetCh. ${repost.channelId}, ${repost.id}`)

        // 投稿にreactionつけておく
        const reaction = await message.react(`📫`)
        console.info(`react to original post. ${reaction.toJSON()}`)

      } catch (e) {
        console.error(e)
        // エラー出てもbot動かし続けるので握る
        return
      }

      console.log(`repost process. complete.`)

    }
  }
})

// HACK : DISCORD_TOKEN でenvに入れていれば引数に入れなくても良い。
console.log('discord repostkun bot starting.')
client.login()
