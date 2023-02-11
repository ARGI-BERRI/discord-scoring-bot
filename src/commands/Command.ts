import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export interface Command {
  /**
   * data is used for command registration
   */
  data: SlashCommandBuilder;

  /**
   * execute() is used for command execution
   */
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
