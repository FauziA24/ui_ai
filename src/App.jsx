import React, { useState } from "react";
import TopBar from "./components/topbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import ChatPage from "./presentation/pages/chat_pages.jsx";
import { makeDependencies } from "./app/index.js";

const deps = makeDependencies();

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className={`app ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setSidebarOpen(!isSidebarOpen)} />
      <div className="content">
        <TopBar onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <ChatPage deps={deps} />
      </div>
    </div>
  );
}
