import { RESTPostAPIChatInputApplicationCommandsJSONBody } from "discord.js";
import { Ping } from "./ping.js";

const commandsList = [Ping];

export const commands = new Map<String, RESTPostAPIChatInputApplicationCommandsJSONBody>(
  commandsList.map((c) => {
    const pair: [string, RESTPostAPIChatInputApplicationCommandsJSONBody] = [c.data.name, c.data.toJSON()];
    return pair;
  })
);
