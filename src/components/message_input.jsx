import React, { useRef } from "react";

export default function MessageInput({ value, onChange, onSend, disabled }) {
  const ref = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="inputBar">
      <textarea
        ref={ref}
        className="textarea"
        placeholder="Ask anything about freight, routing, or general queries..."
        rows={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <button className="button primary" onClick={onSend} disabled={disabled}>
        Send
      </button>
    </div>
  );
}
