import { Events } from "discord.js";
import { DSBEvent } from "./Event.js";

const contentType = ["image/png", "image/jpeg", "image/webp"];

export const onBommyCreated: DSBEvent = {
  eventType: Events.MessageCreate,

  handleEvent: async (message) => {
    if (!message.content.startsWith("!bommy")) {
      return;
    }

    const image = message.attachments.first();

    if (!image) {
      await message.reply("No bommizable image attached! Aborting...");
      return;
    }

    if (!contentType.includes(image.contentType || "")) {
      await message.reply(
        `Unsupported content type! \`${image.contentType || "unknown"}\` is not supported. Aborting...`
      );
      return;
    }

    const score = message.content.split(" ")[1];

    if (!score) {
      await message.reply("No bommy score attached! Aborting...");
      return;
    }

    await message.reply(
      `An attachment of your message is \`${image.contentType || "unknown"}\`.\n` +
        `Your attachment's URL is ${image.url}\n` +
        `This is all.`
    );
  },
};
