# CebolinhaBot

## Intro

CebolinhaBot AKA Jimmy Five is a famous character from Monica's gang.
This simple bot responds and transcribes a message to how Cebolinha (Jimmy Five) would speak (pt-br), changing "r" to "l". The aim of this project was to discover how bots work on twitter and improve my knowledge about the topic.

## Used Technologies
 1. NodeJs
 2. Npm Twit

## Run the code

 1. Create a twitter account and create a  [Twitter app](https://apps.twitter.com/)
 2. Clone the git
 3. make `.env` file and copy `.env.example` and add the relevant keys from twitter app. Twitter userIDs can be obtain from 3rd party site
 4. run `npm install` 
 5. If you want to add more users change `var  users  = [ config.userid ]` in `streaming.js` file and add user ids to monitor. example: ` var  users  = [ 'XXXXX' , 'YYYYYY']`
 6. run `npm start`