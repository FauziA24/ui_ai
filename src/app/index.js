import { MockChatGateway } from "../infrastructure/mock_chat.js";

export function makeDependencies() {
  const chatGateway = new MockChatGateway();
  return { chatGateway };
}
