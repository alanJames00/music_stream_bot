const TelegramBot = require('node-telegram-bot-api');
const process_wrapper = require('./process_wrapper');


// Replace 'YOUR_BOT_TOKEN' with the API token you received from the BotFather
const token = '6684428196:AAGT31e8NcqNqa7h0vykgdbJiwwlQumpuVM';

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Respond to the /start command
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am your one_drive_music_streaming bot.');
});

// Echo user messages
bot.onText(/\ */, (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'downloading started');
    process_wrapper(msg.text);
    bot.sendMessage(chatId, 'synced with one drive successfully:');
});

bot.onText(/list/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'listing')
})



function handleDownload(ytUrl){

}

