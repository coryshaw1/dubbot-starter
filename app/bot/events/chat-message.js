var fs = require("fs"),
    path = require("path");

module.exports = function(bot) {
    //cache all the commands here by auto requiring them and passing the bot
    //supports directories no matter how deep you go. twss
    var commands = {},
        cmd = process.cwd() + "/app/bot/commands";
    var walk = function(dir) {
        fs.readdirSync(dir).forEach(function(file) {
            var _path = path.resolve(dir, file);
            fs.stat(_path, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(_path);
                } else {
                    if (file.indexOf(".js") > -1) {
                        commands[file.split(".")[0]] = require(_path);
                    }

                }
            });
        });
    };
    walk(cmd);
    bot.on("chat-message", function(data) {
            var cmd = data.message,
                //split the whole message words into tokens
                tokens = cmd.split(" "),
                // array of the command triggers
                parsedCommands = [];
            //command handler
            tokens.forEach(function(token) {
                if (token.substr(0, 1) === "!" && parsedCommands.indexOf(token.substr(1)) == -1) {
                    // add the command used to the data sent from the chat to be used later
                    data.trigger = token.substr(1).toLowerCase();
                    parsedCommands.push(data.trigger);
                    //if very first token, it's a command and we cangrab the
                    //params (if any) and add to the data sent from chat
                    if (tokens.indexOf(token) === 0) {
                        //the params are an array of the remaining tokens
                        data.params = tokens.slice(1);
                        //execute the command
                        if (typeof(commands[data.trigger]) !== "undefined") {
                            //passes the bot and the data to the command
                            commands[data.trigger](bot, data);
                        }
                    }
                }
            });
        }
    }
};
