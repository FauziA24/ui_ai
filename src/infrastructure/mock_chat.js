import { ROLES } from "../helpers/entities.js";
import { ChatGateway } from "./chat_gateway.js";

const LOGISTICS_FACTS = [
  "Each TEU is a 20‑ft container — standard for ocean freight.",
  "Last‑mile delivery often drives most of the shipment cost.",
  "Cross‑docking shortens dwell time at hubs.",
  "Incoterms define responsibilities for buyers and sellers.",
];

export class MockChatGateway extends ChatGateway {
  async generateReply() {
    // tiny artificial delay to feel real
    await new Promise((r) => setTimeout(r, 500));

    const fact =
      LOGISTICS_FACTS[Math.floor(Math.random() * LOGISTICS_FACTS.length)];

    // Cute, logistics‑flavored echo
    const content = [
      `**AI Reply:** I hear you. Here\'s a stubbed response based on your prompt.`,
      "",
      `> Supply chain nugget: ${fact}`,
      "",
    ].join("\n");

    return { role: ROLES.assistant, content };
  }
}
