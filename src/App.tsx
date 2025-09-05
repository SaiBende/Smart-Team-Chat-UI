import "./App.css"
import { AppLayout } from "@/AppLayout"
import { useState } from "react"
import { dummyChats, dummyTeamChats } from "./lib/data"

import { ChatWindow } from "@/components/ChatWindow"
import { NewChat } from "@/components/NewChat"
import { NewTeam } from "@/components/NewTeam"

function App() {
  const [chats, setChats] = useState(dummyChats)
  const [teams, setTeams] = useState(dummyTeamChats)
  const [activeChat, setActiveChat] = useState<any>(dummyChats[0])
  const [isNewChat, setIsNewChat] = useState<false | "chat" | "team">(false)


  // Handle new personal chat
  const handleStartChat = (name: string, firstMessage?: string) => {
    const newChat = {
      id: chats.length + 1,
      name,
      img: "https://randomuser.me/api/portraits/lego/1.jpg",
      lastMessage: firstMessage || "",
      time: "Now",
      messages: firstMessage
        ? [{ from: "Me", text: firstMessage, time: "Now" }]
        : [],
    }
    setChats([...chats, newChat])
    setActiveChat(newChat)
    setIsNewChat(false)
  }

  // Handle new team chat
  const handleStartTeam = (teamName: string, members: string[], icebreaker?: string) => {
    const newTeam = {
      id: teams.length + 100, // offset IDs
      teamName,
      members,
      img: "https://api.dicebear.com/7.x/identicon/svg?seed=" + teamName,
      lastMessage: icebreaker || "",
      time: "Now",
      messages: icebreaker
        ? [{ from: "System", text: icebreaker, time: "Now" }]
        : [],
    }
    setTeams([...teams, newTeam])
    setActiveChat(newTeam)
    setIsNewChat(false)
  }

  return (
    <AppLayout
      activeChat={activeChat}
      setActiveChat={setActiveChat}
      dummyChats={chats}
      teamChats={teams}
      setIsNewChat={setIsNewChat}
    >
      {isNewChat === "chat" ? (
        <NewChat onStartChat={handleStartChat} />
      ) : isNewChat === "team" ? (
        <NewTeam onStartTeam={handleStartTeam} setIsNewChat={setIsNewChat} />
      ) : (
        <ChatWindow chat={activeChat} />
      )}
    </AppLayout>
  )
}

export default App
