export class ChatGateway {
  /**
   * @param {{prompt: string, history: Array<{role: string, content: string}>}} input
   * @returns {Promise<{role: string, content: string}>}
   */
  async generateReply(_input) {
    throw new Error("Not implemented");
  }
}
