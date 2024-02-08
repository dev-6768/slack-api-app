require('dotenv').config()
require('./message_strings')

const slackMessageFunction = async({ command, say }) => {
    console.log(command)
    try {
        say(quoteString);
    } catch (error) {
        console.log("err")
        console.error(error);
    }
}

module.exports = {slackMessageFunction}