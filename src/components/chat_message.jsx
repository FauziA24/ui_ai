import React from "react";

export default function ChatMessage({ role, content }) {
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
