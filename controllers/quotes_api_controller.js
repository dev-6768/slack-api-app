require('dotenv').config()
const request = require('request')

const fetchQuotes = async({url, command, say}) => {
    request.get({
        url: url,
        headers : {
            'X-Api-Key': process.env.QUOTES_API_KEY
        }  
    },
    function(error,response,body) {
        if(error) {
            return console.error("request failed : ", error)
        }

        else if(response.statusCode != 200) {
            console.error('Error:', response.statusCode, body.toString('utf8'));
        }

        else {
            console.log(body)
            console.log(JSON.parse(response.body)[0].quote)
            say(JSON.parse(response.body)[0].quote + " - " + JSON.parse(response.body)[0].author)
        }
    }
    )
}

module.exports = {fetchQuotes}