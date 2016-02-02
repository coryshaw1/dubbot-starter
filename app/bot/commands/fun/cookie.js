module.exports = function(bot, data) {
    var cookies = [
        // list your cookie kind here
    ];
    var cookie = cookies[Math.floor(Math.random() * cookies.length)];
    var user = data.user.username;
    if (typeof(data.params) !== "undefined" && data.params.length > 0) {
        if (data.params.length === 1) {
            if (data.params[0].substr(0, 1) === "@") {
                var recipient = data.params[0];
                bot.sendChat("@" + user + " just sent " + recipient + " " + cookie);
            } else {
                bot.sendChat("@" + user + " you need to @[username] to send them a cookie");
            }
        } else {
            bot.sendChat("@" + user + " you can only send a cookie to one person");
        }
    } else {
        bot.sendChat("@" + user + " you didn't select a user. You need to @[username] to send them a cookie");
    }
};
