RESPONSE BOT

Response Bot is a simple Node.js discord bot that randomly responds to messages sent by users in Discord.

NOTE

This is a personalized bot, so you must make your own bot token in the Discord Dev Portal.
The bot will be hosted on your machine and will only run when your machine is on.

INSTALLATION

1. Clone repo or download preferred release
2. Configure bot settings in src/config.json
    - replyRate: integer that represents the average number of messages it takes for the bot to reply
    - responseList: string array of responses
3. Rename .env_temp to .env
4. Put your bot token in .env
5. Invite bot to your server through the Discord Dev Portal
6. Run command [node src/index.js] in the terminal to start the bot
