require('dotenv').config()

const { App } = require("@slack/bolt");


const {slackMessageFunction} = require('./controllers/slack_api_controller');
const {newsApiTopHeadlines, newsApiEverything, newsApiSources, fetchNewsApiArticle} = require('./controllers/news_api_controller')
const {fetchJokesChuckNorris} = require('./controllers/jokes_api_controller')
const {fetchQuotes} = require('./controllers/quotes_api_controller')
const {fetchRiddlesApiController} = require('./controllers/riddles_api_controller')
const{example} = require('./controllers/chat_gpt_api_controller.js')


const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode:true, // enable to use socket mode
  appToken: process.env.SLACK_AUTHORIZATION_TOKEN
});

app.message(/greetings/, async ({ command, say }) => {
    slackMessageFunction({command, say})
});

app.message(/news/, async({command, say}) => {
    var url = process.env.NEWS_COMPLETE_URL
    fetchNewsApiArticle({url, command, say})
});

app.message(/jokes/, async({command, say}) => {
    var url = process.env.CHUCK_NORRIS_URL
    fetchJokesChuckNorris({url, command, say})
});

app.message(/good quotes/, async({command, say}) => {
    var url = process.env.QUOTES_URL
    fetchQuotes({url, command, say})
});

app.message(/riddles/, async({command, say}) => {
    var url = process.env.RIDDLES_URL
    fetchRiddlesApiController({url, command, say})
});

app.message(/chatgpt/, async({command, say}) => {
    example({command, say})
});

(async () => {
  const port = 3000
  await app.start(process.env.PORT || port);
  console.log('Bolt app started!!');
})();
