const twit = require("twit");
const config = require("./config/config")

const cebolinhaBot = new twit(config)

function botIinit() {
    let username = 'oguedescrispim'

    let mentions = cebolinhaBot.stream('statuses/filter', { track: username })

    mentions.on('tweet', function(tweet) {
        console.log(`Got a mention ${tweet.id_str}`)
        console.log(tweet)

        let replyToUsername = tweet.user.screen_name
        let originalText = tweet.text.replace(`@${username}`, '')

        let cebolinhaText = ''
        
        for(let letter of originalText) {
            if(letter === 'r') {
                cebolinhaText += 'l' 
            } else {
                cebolinhaText += letter
            }
        }

        let textToPost = `Olá @${replyToUsername}, tudo bem? Vc falou elado, eu dilia essa flase assim ó: ${cebolinhaText} ;)`

        console.log(textToPost)

        const params = {
            in_reply_to_status_id: tweet.id_str,
            status: textToPost
        }

        cebolinhaBot.post('statuses/update', params, function(err, data, response) {
            if(err) {
                console.log(`Can not reply ${err}`)
            } 

            console.log("Replied to mention")
        })
        

    })
}

botIinit()


