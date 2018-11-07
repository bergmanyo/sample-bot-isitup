const ngrok = require('./get_public_url');
const ViberBot = require('./viber-bot').Bot;

// Creating the bot with access token, name and avatar
const bot = new ViberBot(logger, {
    authToken: "48a3c20075a7d0ea-b2f6d241115c261a-d77ca87692dcaad6",
    name: "RPRTEST",
    avatar: "YOUR_BOT_AVATAR_URL"
});

const http = require('http');
const port = process.env.PORT || 8080;
return ngrok.getPublicUrl().then(publicUrl => {
    console.log('Set the new webhook to"', publicUrl);
    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));
}).catch(error => {
    console.log('Can not connect to ngrok server. Is it running?');
    console.error(error);
});