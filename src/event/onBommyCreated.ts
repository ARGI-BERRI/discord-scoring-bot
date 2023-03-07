import { Events } from "discord.js";
import { DSBEvent } from "./Event.js";
import { PrismaClient } from "@prisma/client";

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

    const score = parseInt(message.content.split(" ")[1] || "XXX", 10);

    if (!score) {
      await message.reply("No bommy score attached! Aborting...");
      return;
    }

    if (Number.isNaN(score)) {
      await message.reply("Given bommy score has illegal character! Aborting...");
      return;
    }

    // It should be valid
    const username = message.author.username;
    const discordId = parseInt(message.author.id);

    const prisma = new PrismaClient();

    await prisma.user.upsert({
      where: { discordId: discordId },
      create: {
        username,
        discordId,
      },
      update: {
        username,
      },
    });

    await prisma.score.create({
      data: {
        discordId: parseInt(message.author.id),
        scorename: "bommy",
        score: score,
      },
    });

    await message.reply(
      `An attachment of your message is \`${image.contentType || "unknown"}\`.\n` +
        `Your attachment's URL is ${image.url}\n` +
        `This is all.`
    );
  },
};
