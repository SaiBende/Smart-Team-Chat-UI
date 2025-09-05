import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles } from "lucide-react"

export function NewChat({
  onStartChat,
}: {
  onStartChat: (participant: string, firstMessage?: string) => void
}) {
  const [name, setName] = useState("")
  const [icebreaker, setIcebreaker] = useState("")

  const handleStart = () => {
    if (name.trim()) {
      onStartChat(name, icebreaker || undefined)
      setName("")
      setIcebreaker("")
    }
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 bg-muted/10">
      <div className="w-full max-w-md bg-background rounded-xl shadow-lg border p-6 space-y-4">
        <h2 className="text-xl font-semibold text-center">Start a New Chat</h2>

        {/* Input for participant name */}
        <Input
          type="text"
          placeholder="Enter participant name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Icebreaker suggestion */}
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Optional: Icebreaker message"
            value={icebreaker}
            onChange={(e) => setIcebreaker(e.target.value)}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setIcebreaker("Hey 👋 How’s your day going?")
            }
          >
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>

        {/* Start chat button */}
        <Button className="w-full" onClick={handleStart}>
          Start Chat
        </Button>
      </div>
    </div>
  )
}
