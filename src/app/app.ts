import { PrismaClient } from "@prisma/client";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";

config();

const TOKEN = process.env["DISCORD_TOKEN"];
const prisma = new PrismaClient();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`DSB is ready. Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  console.log(interaction);
});

client.login(TOKEN);

await prisma.$disconnect();
