import React, { useEffect, useRef, useState, useCallback } from "react";
import ChatMessage from "../components/chat_message.jsx";

export default function Messages({ items = [] }) {
  const listRef = useRef(null);
  const endRef  = useRef(null);
  const [nearBottom, setNearBottom] = useState(true);

  const checkNearBottom = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const threshold = 80; // px
    const dist = el.scrollHeight - el.scrollTop - el.clientHeight;
    setNearBottom(dist <= threshold);
  }, []);

  const scrollToBottom = (behavior = "smooth") => {
    endRef.current?.scrollIntoView({ behavior, block: "end" });
  };

  // pantau scroll manual user
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    checkNearBottom();
    const onScroll = () => checkNearBottom();
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [checkNearBottom]);

  // saat mount → langsung ke bawah (tanpa animasi)
  useEffect(() => { scrollToBottom("auto"); }, []);

  // ketika pesan berubah:
  useEffect(() => {
    if (items.length === 0) return;
    const last = items[items.length - 1];

    // Kalau user lagi di bawah → scroll halus.
    // Kalau tidak di bawah → hanya auto-scroll kalau yang masuk adalah jawaban AI.
    if (nearBottom || last?.role === "assistant") {
      scrollToBottom("smooth");
    }
  }, [items, nearBottom]);

  return (
    <div className="messages" ref={listRef}>
      {items.map((m, i) => (
        <ChatMessage key={m.id ?? i} role={m.role} content={m.text ?? m.content ?? ""} />
      ))}
      {/* {!nearBottom && (
        <button className="scroll-latest" onClick={() => scrollToBottom("smooth")}>
          Scroll to latest
        </button>
      )} */}
      <div ref={endRef} />
    </div>
  );
}
