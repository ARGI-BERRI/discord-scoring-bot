import { PrismaClient } from "@prisma/client";
import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { commandRepository } from "../commands/CommandRepository.js";

config();

const TOKEN = process.env["DISCORD_TOKEN"];
const prisma = new PrismaClient();
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`DSB is ready. Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  const command = commandRepository.get(interaction.commandName);

  if (!command) {
    await interaction.reply({
      content: "WTF?",
      ephemeral: true,
    });

    return;
  }

  await command.execute(interaction);
});

await client.login(TOKEN);

await prisma.$disconnect();
