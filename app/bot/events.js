var fs = require("fs");

module.exports = function(bot) {
    //automatically require the events handlers and pass the bot
    var events = process.cwd() + "/app/bot/events";
    fs.readdirSync(events).forEach(function(file) {
        if (file.indexOf(".js") > -1) {
            require(events + "/" + file)(bot);
        }
    });
};
