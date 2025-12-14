import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { PremiumFeed } from "@/components/premium/premium-feed"
import { PremiumSidebar } from "@/components/premium/premium-sidebar"
import { PremiumHeader } from "@/components/premium/premium-header"
import { ChatSidebar } from "@/components/premium/chat-sidebar"

export default async function PremiumPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  // Get posts from creators
  const { data: posts } = await supabase
    .from("posts")
    .select(`
      *,
      profiles:author_id (
        username,
        display_name,
        avatar_url
      )
    `)
    .order("created_at", { ascending: false })

  // Get creators list
  const { data: creators } = await supabase.from("profiles").select("*").eq("is_creator", true).limit(10)

  return (
    <div className="flex h-screen bg-background">
      <PremiumSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <PremiumHeader profile={profile} />

        <main className="flex-1 overflow-y-auto">
          <PremiumFeed posts={posts || []} currentUserId={user.id} />
        </main>
      </div>

      <ChatSidebar creators={creators || []} />
    </div>
  )
}
