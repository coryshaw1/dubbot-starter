var pkg = require(process.cwd() + "/package.json");

module.exports = function(bot) {
    bot.sendChat("ver: " + pkg.version);
};
