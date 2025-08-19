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

        //   <main className="main">
        //    <Routes> 
        //      <Route path="/" element={<ChatPage deps={deps} />} />
        //      <Route path="/settings" element={<SettingPage />} />
        //      {/* Add more routes as needed */}
        //      <Route path="*" element={<div className="p-6">Not found</div>} />
        //    </Routes>
        //  </main> 