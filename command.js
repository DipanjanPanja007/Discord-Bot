import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';


dotenv.config();

const FIREFLY_BOT_TOKEN = process.env.FIREFLY_BOT_TOKEN;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;

const commands = [
  {
    name: 'ping',
    description: 'pong',
  },
];

const rest = new REST({ version: '10' }).setToken(FIREFLY_BOT_TOKEN);

try {
    console.log('Started refreshing application (/) commands.');
  
    await rest.put(Routes.applicationCommands(DISCORD_CLIENT_ID), { body: commands });
  
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }