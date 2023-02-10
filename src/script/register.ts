import { REST, Routes } from "discord.js";

require("dotenv").config();

const TOKEN = process.env["DISCORD_TOKEN"] || ""
const CLIENT_ID = process.env["DISCORD_CLIENT_ID"] || ""

const rest = new REST({ version: "10"}).setToken(TOKEN)

await rest.put(Routes.applicationCommands(CLIENT_ID), {
    body: command
})