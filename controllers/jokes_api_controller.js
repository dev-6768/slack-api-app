const fetchJokesChuckNorris = async({url, command, say}) => {
    var req = new Request(url);
    fetch(req)
    .then(response => response.json())
    .then(function(jsonData) {
        joke = jsonData["value"]
        console.log(joke)
        say(joke)
    })
}

module.exports = {fetchJokesChuckNorris}