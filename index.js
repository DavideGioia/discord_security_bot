const { Client, Intents } = require("discord.js");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

// Set the prefix
let prefix = "!";
client.on("messageCreate", (message) => {
    // Exit and stop if the prefix is not there or if user is a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.content.startsWith(`${prefix}ping`)) {
        message.channel.send("pong!");
    } else

        if (message.content.startsWith(`${prefix}foo`)) {
            message.channel.send("bar!");
        }
});

client.login("OTc5NTI0MTY5NDg4MjkzODg4.GvJbry.GSjrwpcERZmf-HJv6DPxWjL3DIFvSbw1LhDKhY");