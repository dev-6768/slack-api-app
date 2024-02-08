const request = require('request')
require('dotenv').config()

const fetchRiddlesApiController = async({url, command, say}) => {
    request.get({
        url: url,
        headers: {
            'X-Api-Key': process.env.QUOTES_API_KEY,
        }

    }, function(error, response, body) {
        if(error) {
            return console.error("Request failed : ", error)
        }
        else if(response.statusCode != 200) {
            return console.error('Error:', response.statusCode, body.toString('utf8'));
        }

        else{
            var question = JSON.parse(body)[0].question
            var answer = JSON.parse(body)[0].answer
            console.log(question + " - " + answer)
            say(question + " - " + answer)
        }
    }
    )
}

module.exports = {fetchRiddlesApiController}