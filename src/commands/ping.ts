import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "./Command.js";

export const Ping: Command = {
  data: new SlashCommandBuilder().setName("ping").setDescription("Replies with Quack!"),
  async execute(interaction: ChatInputCommandInteraction) {
    interaction.reply("Quack!");
  },
};
