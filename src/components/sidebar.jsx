import React from "react";
import { X } from "lucide-react";

export default function Sidebar({ isOpen, onToggle }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Close icon for mobile */}
      <div className="sidebar-close-mobile">
        <X size={20} onClick={onToggle} />
      </div>

      <div className="brand" aria-label="LogistiChat brand">
        <div className="logo" aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}></div>
          ))}
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
