const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const config = require("./config.json");

client.on("messageCreate", (message) => {
    // Exit and stop if the prefix is not there or if user is a bot
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(`${config.prefix}ping`)) {
        message.channel.send("pong!");
    } else

        if (message.content.startsWith(`${config.prefix}foo`)) {
            message.channel.send("bar!");
        }
});

client.login(config.token);