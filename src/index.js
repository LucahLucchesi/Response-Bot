require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');
const { replyRate, responses} = require('./config.json')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.mentions.has(client.user) || Math.floor(Math.random() * replyRate) == 0){
        message.reply(responses[Math.floor(Math.random() * responses.length)]);
    };
});

client.login(process.env.TOKEN)