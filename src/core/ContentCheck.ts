import pino from 'pino'
const logger = pino({ level: process.env.LOG_LEVEL || 'info' })

// FIXME : regex指定できた方がよさそう
const checkStrings = [
  'https://www.youtube.com/',
  'https://youtube.com/',
  'https://youtube.com/',
  'https://youtu.be/'
]

export function checkContentContainsTargetWord (content: string): boolean {

  if (checkStrings.find(x => content.includes(x))) {
    logger.info(`this content contains repost target word.`)
    return true
  } else {
    logger.debug(`don't need to repost.`)
    return false
  }
}
