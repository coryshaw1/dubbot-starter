"use strict";

var Hapi = require("hapi");
var logger = require("jethro");
var config = require(process.cwd() + "/config");
var pkg = require(process.cwd() + "/package.json");
var server = new Hapi.Server();

server.connection({
    host: config.ipaddress,
    port: config.port
});

server.routes({
    method: "GET",
    path: "/",
    handler: function(request, reply) {
        reply({
            statusCode: 200,
            message: "Dubbot Online",
            version: pkg.version
        });
    }
});

server.start(function() {
    logger("info", "API", "server running at " + server.info.uri);
});
