import React, { useEffect, useRef } from "react";

export default function ChatMessage({ role, content, items = [] }) {
  const endRef = useRef(null);
  const listRef = useRef(null);

  const scrollToBottom = (behavior = "smooth") => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior, block: "end" });
    }
  };

  // saat mount -> langsung ke bawah (tanpa animasi)
  useEffect(() => {
    scrollToBottom("auto");
  }, []);

  // tiap jumlah pesan berubah -> scroll halus
  useEffect(() => {
    scrollToBottom("smooth");
  }, [items.length]);

  // guard ResizeObserver (biar gak error di env yang belum support)
  useEffect(() => {
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => scrollToBottom("auto"));
    if (listRef.current) ro.observe(listRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <article className={`msg ${role}`}>
      <div dangerouslySetInnerHTML={{ __html: mdToHtml(content) }} />
    </article>
  );
}

// tiny markdown → HTML (bold, italics, code, blockquote, line breaks)
function mdToHtml(md) {
  return md
    .replace(/^> (.*)$/gm, "<blockquote>$1</blockquote>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br/>");
}