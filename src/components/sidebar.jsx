import React from "react";
import { X } from "lucide-react";

export default function Sidebar({ isOpen}) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="brand" aria-label="LogistiChat brand">
        {/* <div className="logo" aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div> */}
        <span>pecut ai</span>
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

// export default function Sidebar({ isOpen, onToggle }) {
  //   return (
//     <aside className={`sidebar ${isOpen ? "open" : "closed"}`} aria-label="Sidebar">
//       <div className="sidebar-close-mobile" aria-hidden>
//         <X size={20} onClick={onToggle} />
//       </div>

//       <div className="brand" aria-label="LogistiChat brand">
//         <div className="logo" aria-hidden>
//           {Array.from({ length: 9 }).map((_, i) => (
//             <div key={i} />
//           ))}
//         </div>
//         <span>Pecut AI</span>
//       </div>

//       <nav className="nav" aria-label="Sidebar navigation">
//         <button className="button primary">New Chat</button>
//         <button className="button">Saved Prompts</button>
//         <button className="button">Settings</button>
//       </nav>

//       <div style={{ marginTop: 8, fontSize: 12, opacity: 0.9 }}>
//         Tip: Use <span className="kbd">Shift</span> + <span className="kbd">Enter</span> for new line.
//       </div>
//     </aside>
//   );
// }

