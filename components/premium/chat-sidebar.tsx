"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface Creator {
  id: string
  username: string
  display_name: string
  avatar_url: string
  credits: number
}

interface ChatSidebarProps {
  creators: Creator[]
}

export function ChatSidebar({ creators }: ChatSidebarProps) {
  return (
    <aside className="w-80 border-l border-border bg-card">
      <div className="p-6 border-b border-border">
        <h2 className="font-semibold text-lg mb-1">CHATS</h2>
        <p className="text-sm text-muted-foreground">Creadores activos</p>
      </div>

      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 space-y-3">
          {creators.map((creator) => (
            <button
              key={creator.id}
              className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={creator.avatar_url || "/placeholder.svg"} />
                  <AvatarFallback className="bg-purple-600 text-white">
                    {creator.username[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />
              </div>

              <div className="flex-1 text-left">
                <p className="font-medium text-sm">{creator.display_name}</p>
                <p className="text-xs text-muted-foreground">{creator.credits.toLocaleString()} Credits</p>
              </div>

              <Button variant="ghost" size="icon" className="text-purple-600">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </button>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full bg-transparent">
          Ver todos
        </Button>
      </div>
    </aside>
  )
}
