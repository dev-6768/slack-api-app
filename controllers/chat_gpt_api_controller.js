require('dotenv').config()

require('./message_strings')

const example = async({command, say}) => {
    console.log(command)
    const {ChatGPTAPI} = await import('chatgpt')
    const api = new ChatGPTAPI({
      apiKey: process.env.CHAT_GPT_KEY
    })
  
    const res = await api.sendMessage(questionStringMCQ)
    say(res.text)
    console.log(res.text)

    console.log("hello")
}

module.exports = {example}