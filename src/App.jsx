import React, { useState } from "react";
import TopBar from "./components/topbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import ChatPage from "./presentation/chat_pages.jsx";
import { makeDependencies } from "./app/index.js";

const deps = makeDependencies();

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [input, setInput] = useState("");    
  const [response, setResponse] = useState("");

  const sendPrompt = async () => {
    try {
      const res = await fetch("http://0.0.0.0:8000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={`app ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="content">
        <TopBar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <ChatPage 
          deps={deps}
          input={input}
          setInput={setInput}
          response={response}
          sendPrompt={sendPrompt}
        />
      </div>
    </div>
  );
}
