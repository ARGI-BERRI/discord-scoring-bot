import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import { commandRepository } from "../commands/CommandRepository.js";

config();

const TOKEN = process.env["DISCORD_TOKEN"] || "";
const CLIENT_ID = process.env["DISCORD_CLIENT_ID"] || "";

await new REST({ version: "10" }).setToken(TOKEN).put(Routes.applicationCommands(CLIENT_ID), {
  body: Array.from(commandRepository.values()).map((c) => c.data.toJSON()),
});
