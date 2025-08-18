import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand" aria-label="LogistiChat brand">
        <div className="logo" aria-hidden>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <span>LogistiChat</span>
      </div>

      <nav className="nav">
        <button className="button primary">New Chat</button>
        <button className="button">Saved Prompts</button>
        <button className="button">Settings</button>
      </nav>

      <div style={{ marginTop: 18, fontSize: 12, opacity: 0.85 }}>
        <div>
          Tip: Use <span className="kbd">Shift</span> +{" "}
          <span className="kbd">Enter</span> for new line.
        </div>
      </div>
    </aside>
  );
}
