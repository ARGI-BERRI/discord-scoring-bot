import { Command } from "./Command.js";
import { Ping } from "./ping.js";

const commandsList = [Ping];

/**
 * `commandRepository` contains available commands.
 */
export const commandRepository = new Map<string, Command>(
  commandsList.map((c) => {
    const pair: [string, Command] = [c.data.name, c];
    return pair;
  })
);
