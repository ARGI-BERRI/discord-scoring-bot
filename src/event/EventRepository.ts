import { Events } from "discord.js";
import { onBommyCreated } from "./onBommyCreated.js";
import { EventHandler } from "./Event.js";

const events = [onBommyCreated];

export const EventRepository = new Map<Events, EventHandler>(
  events.map((event) => [event.eventType, event.handleEvent])
);
