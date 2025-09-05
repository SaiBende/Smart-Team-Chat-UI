import {
  Home,
  Search,
  Settings,
  MessageCircle,
  Video,
  Phone,
  Plus,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ui/ThemeToggle"


// Sidebar menu items
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Chats", url: "#", icon: MessageCircle },
  { title: "Voice Call", url: "#", icon: Phone },
  { title: "Video Call", url: "#", icon: Video },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar({
  activeChat,
  setActiveChat,
  dummyChats,
  setIsNewChat,
}: {
  activeChat: any
  setActiveChat: any
  dummyChats: any
  setIsNewChat: (value: boolean) => void
}) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>
          <h1 className="flex items-center text-lg font-semibold">
            <MessageCircle className="mr-2 h-5 w-5" /> Smart Chat UI
          </h1>
        </SidebarHeader>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Chat List */}
        <SidebarGroup>
          <SidebarGroupLabel>Chats</SidebarGroupLabel>
          <SidebarGroupContent>
            {/* New Chat button */}
            <div className="p-2">
              <Button
                className="w-full justify-center"
                variant="outline"
                onClick={() => setIsNewChat(true)}
              >
                <Plus className="h-4 w-4 mr-1" /> New Chat
              </Button>
            </div>

            <div className="space-y-2">
              {dummyChats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton asChild>
                    <button
                      onClick={() => {
                        setActiveChat(chat)
                        setIsNewChat(false) // close "new chat" screen if open
                      }}
                      className={`flex items-center gap-3 text-left w-full rounded-lg p-2 ${
                        activeChat?.id === chat.id
                          ? "bg-primary/10"
                          : "hover:bg-muted"
                      }`}
                    >
                      <img
                        src={chat.img}
                        alt={chat.name}
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {chat.name}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {chat.lastMessage}
                        </p>
                      </div>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                        {chat.time}
                      </span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
         
      </SidebarContent>
    </Sidebar>
  )
}
