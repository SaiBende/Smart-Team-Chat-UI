import "./App.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from "./components/ui/ThemeToggle"




export function AppLayout({
  children,
  activeChat,
  setActiveChat,
  dummyChats,
  teamChats,
  setIsNewChat,
}: {
  children: React.ReactNode
  activeChat: any
  setActiveChat: any
  dummyChats: any
  teamChats: any
  setIsNewChat: (value: any) => void
}) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full">
        {/* Sidebar */}
        <AppSidebar
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          dummyChats={dummyChats}
          setIsNewChat={setIsNewChat} 
          teamChats={teamChats}
        />
         

        {/* Main content (Chat Window) */}
        <main className="flex-1 flex flex-col">
          {/* Optional trigger button for collapsing sidebar */}
          <div className=" border-b ">
            <SidebarTrigger />
            <ThemeToggle/>
          </div>

          {/* Chat window injected as children */}
          <div className="flex-1 flex flex-col overflow-hidden">
           
            {children}</div>
        </main>
      </div>
    </SidebarProvider>
  )
}
