import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

/**
 * This interface represents the structure of Discord's slack command.
 */
export interface Command {
  /**
   * `data` is used for command registration.
   *
   * This defines what arguments will be accepted by this bot.
   */
  data: SlashCommandBuilder;

  /**
   * `execute()` is used for command execution.
   *
   * When `ChatInputCommandInteraction` is triggered, this `execute()`
   * will handle a corresponding command.
   */
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}
