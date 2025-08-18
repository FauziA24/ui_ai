import { ROLES } from "../helpers/entities.js";
import { ChatGateway } from "./chat_gateway.js";

export class OpenAiChatGateway extends ChatGateway {
  constructor({ baseUrl = "/api/chat", apiKey } = {}) {
    super();
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async generateReply({ prompt, history = [] }) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(this.apiKey ? { Authorization: `Bearer ${this.apiKey}` } : {}),
      },
      body: JSON.stringify({ prompt, history }),
    });
    if (!res.ok) throw new Error("Chat API failed");
    const data = await res.json();
    return { role: ROLES.assistant, content: data.message };
  }
}
