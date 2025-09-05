import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function NewTeam({ onStartTeam, setIsNewChat }) {
  const [teamName, setTeamName] = useState("")
  const [members, setMembers] = useState("")
  const [icebreaker, setIcebreaker] = useState("")

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-4 bg-background shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-center">Create a New Team</h2>

        <input
          type="text"
          placeholder="Team name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />

        <input
          type="text"
          placeholder="Members (comma separated)"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          className="w-full rounded-lg border px-3 py-2 text-sm"
        />

        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            setIcebreaker("Welcome to the team 🎉 Let's achieve great things together!")
          }
        >
          <Sparkles className="h-4 w-4 mr-2" /> Generate Icebreaker
        </Button>

        {icebreaker && (
          <div className="bg-muted px-3 py-2 rounded text-sm">{icebreaker}</div>
        )}

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setIsNewChat(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (teamName.trim()) {
                onStartTeam(
                  teamName,
                  members.split(",").map((m) => m.trim()),
                  icebreaker
                )
              }
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  )
}
