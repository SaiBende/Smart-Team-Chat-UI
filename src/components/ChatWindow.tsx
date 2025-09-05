import { Phone, Video, Search, Sparkles, MessageSquare,Smile, Paperclip, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"



export function ChatWindow({ chat }: { chat: any }) {
  const [summary, setSummary] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState<string>("")
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  // Reset AI placeholders when chat changes
  useEffect(() => {
    setSummary(null)
    setInputValue("")
  }, [chat])

  // Scroll to bottom when chat/messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [chat, chat?.messages])

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center text-muted-foreground">
        Select a chat to start messaging
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-full">

      {/* Header */}
      <div className="flex items-center justify-between border-b px-6 py-4 bg-background shrink-0">

        <div className="flex items-center gap-3">
          <img src={chat.img} alt={chat.name} className="w-10 h-10 rounded-full" />
          <div>
            <h2 className="font-medium text-base">{chat.name}</h2>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Phone className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Video className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Search className="h-5 w-5" /></Button>
        </div>
      </div>

      {/* AI Placeholder Buttons */}
      <div className="flex gap-2 px-6 py-2 border-b bg-muted/30 shrink-0">
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setSummary("Summary: Discussion about new design. Both agreed to share it with the team.")
          }
        >
          <Sparkles className="mr-2 h-4 w-4" /> Summarize Thread
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setInputValue("Sure, I’ll take care of it 👍")}
        >
          <MessageSquare className="mr-2 h-4 w-4" /> Smart Reply
        </Button>
      </div>

      {/* Messages (scrollable) */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-muted/10">
        {chat.messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === "Me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`rounded-2xl px-4 py-2 max-w-[75%] text-sm shadow-sm ${msg.from === "Me"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-white dark:bg-muted rounded-bl-none"
                }`}
            >
              <p>{msg.text}</p>
              <span className="block text-[10px] opacity-70 mt-1 text-right">{msg.time}</span>
            </div>
          </div>
        ))}

        {/* Show AI Summary */}
        {summary && (
          <div className="flex justify-center">
            <div className="bg-amber-100 dark:bg-amber-900 text-sm text-center px-4 py-2 rounded-lg max-w-md">
              {summary}
            </div>
          </div>
        )}

        {/* Empty div for auto-scroll */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t bg-background px-4 py-3 flex items-center gap-2 shrink-0">
        {/* Emoji button */}
        <Button variant="ghost" size="icon">
          <Smile className="h-5 w-5" />
        </Button>

        {/* Attachment button */}
        <Button variant="ghost" size="icon">
          <Paperclip className="h-5 w-5" />
        </Button>

        {/* Message input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />

        {/* Recording button (when no text) */}
        {inputValue.trim() === "" ? (
          <Button variant="ghost" size="icon">
            <Mic className="h-5 w-5" />
          </Button>
        ) : (
          /* Send button (when text is present) */
          <Button
            className="px-4 py-2 rounded-full"
            onClick={() => {
              if (inputValue.trim()) {
                alert(`Message sent: ${inputValue}`)
                setInputValue("")
              }
            }}
          >
            Send
          </Button>
        )}
      </div>
    </div>
  )
}
