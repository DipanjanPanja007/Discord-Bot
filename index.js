import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const FIREFLY_BOT_TOKEN = process.env.FIREFLY_BOT_TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on("messageCreate", (message) => {
    // console.log(message);  
    if(message.author.bot)return ;
    if(message.content.startsWith("create")){
        return message.reply({
            content: `Generating short URL for ${message.content.split(" ")[1]}`,
        })
    }
    message.reply({
        content: `Hi ${message.author.globalName.split(" ")[0]},I am Firefly Bot`,
    });      
});

client.on("interactionCreate", (interaction) =>{
    // console.log(interaction);
    interaction.reply("Pong!!!")
});



client.login(FIREFLY_BOT_TOKEN); 




