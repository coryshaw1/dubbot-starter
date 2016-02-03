module.exports = {
	//cannot leave a file blank because git. so have my evironment variables :D
	ipaddress: process.env.OPENSHIFT_NODEJS_IP,
	port: process.env.OPENSHIFT_NODEJS_PORT,
	botName: process.env.BOT_NAME,
	botPass: process.env.BOT_PASS,
	roomURL: process.env.ROOM_URL
};
