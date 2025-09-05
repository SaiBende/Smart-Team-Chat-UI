import "./App.css"
import { AppLayout } from "@/AppLayout"
import { useState } from "react"
import { dummyChats } from "./lib/data"

import { ChatWindow } from "@/components/ChatWindow"
import { NewChat } from "@/components/NewChat"

function App() {
  const [chats, setChats] = useState(dummyChats)
  const [activeChat, setActiveChat] = useState<any>(dummyChats[0])
  const [isNewChat, setIsNewChat] = useState(false)

  // When starting a new chat
  const handleStartChat = (name: string, firstMessage?: string) => {
    const newChat = {
      id: chats.length + 1,
      name,
      img: "https://randomuser.me/api/portraits/lego/1.jpg", // placeholder avatar
      lastMessage: firstMessage || "",
      time: "Now",
      messages: firstMessage
        ? [{ from: "Me", text: firstMessage, time: "Now" }]
        : [],
    }
    setChats([...chats, newChat])
    setActiveChat(newChat)
    setIsNewChat(false) // exit NewChat screen
  }

  return (
    <AppLayout
      activeChat={activeChat}
      setActiveChat={setActiveChat}
      dummyChats={chats}
      setIsNewChat={setIsNewChat} // 👈 pass down
    >
      {isNewChat ? (
        <NewChat onStartChat={handleStartChat} />
      ) : (
        <ChatWindow chat={activeChat} />
      )}
    </AppLayout>
  )
}

export default App
