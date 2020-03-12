import { reverseMapping } from './tools'

const emojis = {
  'THUMBS_UP': '👍',
  'THUMBS_DOWN': '👎',
  'LAUGH': '😄',
  'HOORAY': '🎉',
  'CONFUSED': '😕',
  'HEART': '❤️',
  'ROCKET': '🚀',
  'EYES': '👀',
}

export const getEmojiByName = (emojiName) => {
  return emojis[emojiName] || '';
};

export const getNameByEmoji = (emoji) => {
  return reverseMapping(emojis)[emoji] || '';
};