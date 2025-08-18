// Use Case: send a prompt and get a reply from the ChatGateway
export const sendMessage =
  (chatGateway) =>
  async ({ prompt, history }) => {
    return chatGateway.generateReply({ prompt, history });
  };
