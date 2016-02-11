# Dubbot Starter

[dubtrack.fm](https://dubtrack.fm) starter bot using [DubAPI](https://github.com/anjanms/DubAPI/).

# Bots using this:

* [SteveBot](https://github.com/coryshaw1/SteveBot)

# Installation and Running

1) `git clone https://github.com/NitroGhost/dubbot-starter.git`

2) `npm install`

3) Setup your config.mine.js file. example:
```js
module.exports = {
	botName: "dubbot",
	botPass: "justADubbotPassword",
	roomURL: "dub-bot"
};
```
4) Add commands in the `/app/bot/commands` file with the name of the command. example: `ping.js`. Any file added to the commands folder will be auto required on startup and caches the name of the file so that it can be called when sending the command in the chat. If you want the file to be called by more than just the file name, then you can define an array of extra commands by setting `module.exports.extraCommands` to an array of strings. I have already added a few simple commands in the commands folder to get you started. 

5) You can add more events listeners in the events folder and add your code on what you want it to do on that event. The convention that I went for with my own bot was to name the file with the name of the event such as `room_playlist-update.js` so that you know what the file does. As far as the bot is concerned, the file name does not matter, unlike the file names in the commands folder.

5) Run the bot with `npm run bot`. this will `gulp mine` which copies your config.mine.js file to config.js then `node ./app/bot/index.js` to start the bot

# TODO:

write up how to host your bot using openshift which will explain why there is a "sever" side to the bot. Will also explain the extra scripts found in the `package.json` files and how to use them.
