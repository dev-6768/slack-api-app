var emoji = require('node-emoji')

quoteString = "Hello, how are you doin' ?" + emoji.get(":smile:")
thankyouQuote = "Thank you so much"
sorryQuote = "I am so sorry"
greetingQuote = "Hello my name is slack-slayer and i am gonna slay you today !"
goodmorningQuote = "good morning!"
goodafternoonQuote = "good afternoon!"
goodnightQuote = "good night!"

questionString = "The water cycle involves the exchange of energy, which leads to temperature changes. When water evaporates, it takes up energy from its surroundings and cools the environment. When it condenses, it releases energy and warms the environment. These heat exchanges influence climate."

questionStringMCQ = 'Generate 5 mcq questions with 4 options in hindi and marked answers from the following text: ' + questionString
questionStringFillInTheBlanks = 'Generate 5 fill in the blanks questions in hindi and marked answers from the following text: ' + questionString
questionStringTrueOrFalse = 'Generate 5 true or false questions in hindi and marked answers from the following text: ' + questionString