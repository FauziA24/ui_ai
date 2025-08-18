import React from "react";
import TopBar from "./components/topbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import ChatPage from "./presentation/pages/chat_pages.jsx";
import { makeDependencies } from "./app/index.js";

const deps = makeDependencies();

export default function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <TopBar />
        <ChatPage deps={deps} />
      </div>
    </div>
  );
}
