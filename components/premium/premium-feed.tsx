"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, ImageIcon, Video } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

interface Post {
  id: string
  content: string
  media_url: string
  media_type: string
  likes_count: number
  comments_count: number
  created_at: string
  profiles: {
    username: string
    display_name: string
    avatar_url: string
  }
}

interface PremiumFeedProps {
  posts: Post[]
  currentUserId: string
}

export function PremiumFeed({ posts, currentUserId }: PremiumFeedProps) {
  const [activeTab, setActiveTab] = useState("foto")
  const supabase = createClient()

  const handleLike = async (postId: string) => {
    await supabase.from("likes").insert({
      user_id: currentUserId,
      post_id: postId,
    })
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/diverse-avatars.png" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
          <input
            type="text"
            placeholder="Escribe algo..."
            className="flex-1 px-4 py-2 bg-muted rounded-lg outline-none"
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant={activeTab === "foto" ? "default" : "secondary"}
            onClick={() => setActiveTab("foto")}
            className="flex-1"
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Foto
          </Button>
          <Button
            variant={activeTab === "video" ? "default" : "secondary"}
            onClick={() => setActiveTab("video")}
            className="flex-1"
          >
            <Video className="h-4 w-4 mr-2" />
            Video
          </Button>
        </div>
      </Card>

      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <Avatar>
                <AvatarImage src={post.profiles.avatar_url || "/placeholder.svg"} />
                <AvatarFallback>{post.profiles.username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.profiles.display_name}</p>
                <p className="text-sm text-muted-foreground">{new Date(post.created_at).toLocaleDateString()}</p>
              </div>
            </div>

            {post.media_url && (
              <img src={post.media_url || "/placeholder.svg"} alt="Post content" className="w-full rounded-lg mb-4" />
            )}

            {post.content && <p className="text-sm mb-4">{post.content}</p>}

            <div className="flex items-center gap-6 pt-4 border-t border-border">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors"
              >
                <Heart className="h-5 w-5" />
                <span className="text-sm">{post.likes_count}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">{post.comments_count}</span>
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
