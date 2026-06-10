require('dotenv').config();

console.log("ALL ENV KEYS:", Object.keys(process.env));

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log("Bot is online");
});

client.login(process.env.TOKEN);
