//if you host this on openshift, you are required (heh, das a pun) to have a
//server to bind to the openshift IP and port. if you don't, well, no bot
//it will just start itself, die, get revived, die, get revived again, over
// and over until openshift finally declares it dead. and your log file
//will be HUGE! with all the failed attempt. ANYWAYS! this is the start file
//for openshift (as specified in the package.json file) the more you know.
require("./app/server");
require("./app/bot");
