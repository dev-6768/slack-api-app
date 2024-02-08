require('dotenv').config()
const e = require('express');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

const fetchNewsApiArticle = async({url, command, say}) => {
    console.log("fetchNewsApiArticles : " + url)
    console.log("fetchNewsApiArticles : " + command)
    var req = new Request(url);
    fetch(req)
    .then(response => response.json())
    .then(function(jsonData) {
        messageString = ""
        for(let i = 0; i < jsonData['articles'].length; i++) {
            messageString += jsonData['articles'][i].description + "\n\n" 
        }
        console.log(messageString)
        say(messageString)
    })

}

const newsApiTopHeadlines = async({command, say}) => {
    console.log("newsApiTopHeadlines: " + String(command))
    try {
        newsapi.v2.topHeadlines({
            //sources: 'bbc-news,the-verge',
            q: 'dollar',
            category: 'business',
            language: 'en',
            country: 'us'
          }).then(response => {
            console.log(response);
            //say(response)
        });
    }

    catch(error) {
        console.log("err")
        console.error(error)
    }
    
}


const newsApiEverything = async({command, say}) => {
    console.log(command)
    newsapi.v2.everything({
        q: 'bitcoin',
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com',
        language: 'en',
        sortBy: 'relevancy',
        page: 2
      }).then(response => {
        console.log(response);
        say(response)
      });

}

const newsApiSources = async({command, say}) => {
    console.log(command)
    newsapi.v2.sources({
        category: 'technology',
        language: 'en',
        country: 'us'
      }).then(response => {
        console.log(response);
        say(response)
      })
}


module.exports = {newsApiTopHeadlines, newsApiEverything, newsApiSources, fetchNewsApiArticle}