import React, { useMemo, useRef, useState } from "react";
import ChatMessage from "../../components/chat_message.jsx";
import MessageInput from "../../components/message_input.jsx";
import { ROLES, createMessage } from "../../helpers/entities.js";
import { sendMessage } from "../../helpers/send_message.js";

export default function ChatPage({ deps }) {
  const [messages, setMessages] = useState([
    createMessage(
      ROLES.assistant,
      "🧭 **Welcome to LogistiChat!**\n\nAsk about routes, containers, lead times, or anything else. I'm a mock assistant right now — wire me to your backend when ready."
    ),
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const usecase = useMemo(
    () => sendMessage(deps.chatGateway),
    [deps.chatGateway]
  );
  const scrollRef = useRef(null);

  const history = useMemo(
    () => messages.map(({ role, content }) => ({ role, content })),
    [messages]
  );

  const doSend = async () => {
    const prompt = input.trim();
    if (!prompt || loading) return;

    const userMsg = createMessage(ROLES.user, prompt);
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const reply = await usecase({ prompt, history });
      const aiMsg = createMessage(ROLES.assistant, reply.content);
      setMessages((m) => [...m, aiMsg]);
    } catch (e) {
      const err = createMessage(ROLES.assistant, `❌ Error: ${e.message}`);
      setMessages((m) => [...m, err]);
    } finally {
      setLoading(false);
      // auto-scroll
      requestAnimationFrame(() => {
        if (scrollRef.current)
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      });
    }
  };

  return (
    <section className="chat">
      <div className="messages" ref={scrollRef}>
        {messages.map((m) => (
          <ChatMessage key={m.id} role={m.role} content={m.content} />
        ))}
      </div>
      <MessageInput
        value={input}
        onChange={setInput}
        onSend={doSend}
        disabled={loading}
      />
    </section>
  );
}
