// import token, discord library, and config vars
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const { activity, replyRate, responses } = require('./config.json')

// client represents the bot
// intents are discord events that the bot listens to
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

// console message and set activity on bot start
client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
    if(activity == null) return;
    client.user.setActivity({
        name: activity
    });
});

// reply when message is sent
// does not reply if the message author is a bot or the reply roll fails
client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.mentions.has(client.user) || Math.floor(Math.random() * replyRate) == 0){
        message.reply(responses[Math.floor(Math.random() * responses.length)]);
    };
});

client.login(process.env.TOKEN)