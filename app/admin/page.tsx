import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { UploadContent } from "@/components/admin/upload-content"
import { Shield } from "lucide-react"

export default async function AdminPage() {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  // Check if user is admin or creator
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  if (!profile?.is_admin && !profile?.is_creator) {
    redirect("/premium")
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-purple-600" />
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
        </div>

        <UploadContent profile={profile} />
      </div>
    </div>
  )
}
