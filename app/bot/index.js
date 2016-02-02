var DubAPI = require("dubapi"),
    log = require("jethro"),
    //I use process.cwd as a little trick to get the the root of the app :P
    //I hate seeing "../../../../../../filename". STAHP IT! MMMKAY?.. K.
    pkg = require(process.cwd() + "/package.json"),
    config = require(process.cwd() + "/config");

//if it fails on log in, you can't use the bot.log version
//yes I know I could have declared them once here then pass it to bot but
//I didn't want to. leaf me alone :'(
log.setUTC(true);
log.setTimeformat("YYYY-MM-DD HH:mm:ss:SSS");
new DubAPI({
    username: config.botName,
    password: config.botPass
}, function(err, bot) {
    if (err) {
        return log("error", "BOT", err);
    }
    //setup logger. if you want to log stuff you can use bot.log from anywhere
    //pfft, making it too easy for you guys :P
    //to find out how to use jethro visit: https://github.com/JethroLogger/Jethro
    bot.log = require("jethro");
    //get a useable date/time format. the default sucks!
    bot.log.setTimeformat("YYYY-MM-DD HH:mm:ss:SSS");
    //you may want to remove this setting. I had it because my bot is hosted in
    //the states, and don't know what timezone, so for my logs I know exactly
    //what time things happened. yay for knowing stuff!
    bot.log.setUTC(true);
    function connect() {
        bot.connect(config.roomURL);
    }
    bot.log("info", "BOT", "DubAPI Version: " + bot.version);
    bot.on("connected", function(name) {
        bot.sendChat("online! version: " + pkg.version);
        bot.log("info", "BOT", "Bot Version: " + pkg.version);
        bot.log("info", "BOT", "Bot connected to: " + name);
    });
    bot.on("disconnected", function(name) {
        bot.log("warning", "BOT", "Disconnected from:" + name);
        setTimeout(connect, 15000);
    });
    bot.on("error", function(err) {
        bot.log("error", "BOT", err);
    });
    connect();
    //pass the bot to the events handler
    require("./events")(bot);
});
