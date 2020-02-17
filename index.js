var TelegramBot = require('node-telegram-bot-api');

var token = '981840210:AAEA4wdR6q0bXXde2ruaMd5mSg2Hk_J_Myw'; 
// Подробнее: https://core.telegram.org/bots/api#getupdates
var bot = new TelegramBot(token, { polling: true });


bot.onText(/(.+)/, function (msg, match) {
    var fromId = msg.from.id; // Получаем ID отправителя
    var resp = match[1]; // Получаем текст после /echo
    bot.sendMessage(fromId, resp);
});

// Простая команда без параметров
//bot.on('message', function (msg) {
    //var chatId = msg.chat.id; // Берем ID чата (не отправителя)
    // Фотография может быть: путь к файлу, поток (stream) или параметр file_id
   // var photo = 'cats.png'; // в папке с ботом должен быть файл "cats.png"
    //bot.sendPhoto(chatId, photo, { caption: 'Милые котята' });
//});