import { Events, Message } from "discord.js";

export type EventHandler = (message: Message<boolean>) => void | Promise<void>;

export interface DSBEvent {
  eventType: Events;
  handleEvent: EventHandler;
}
