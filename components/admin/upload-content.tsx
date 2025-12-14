"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"
import { ImageIcon, Video, Upload } from "lucide-react"

interface UploadContentProps {
  profile: {
    id: string
    username: string
    is_admin: boolean
  }
}

export function UploadContent({ profile }: UploadContentProps) {
  const [content, setContent] = useState("")
  const [mediaType, setMediaType] = useState<"foto" | "video">("foto")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.from("posts").insert({
        author_id: profile.id,
        content,
        media_type: mediaType,
        media_url: "/content-creation-process.png",
      })

      if (error) throw error

      setContent("")
      alert("Contenido publicado exitosamente!")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Error al publicar")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subir Contenido Premium</CardTitle>
        <CardDescription>Publica fotos y videos para tus suscriptores</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUpload} className="space-y-6">
          <div className="space-y-2">
            <Label>Tipo de Contenido</Label>
            <div className="flex gap-4">
              <Button
                type="button"
                variant={mediaType === "foto" ? "default" : "outline"}
                onClick={() => setMediaType("foto")}
                className="flex-1"
              >
                <ImageIcon className="h-4 w-4 mr-2" />
                Foto
              </Button>
              <Button
                type="button"
                variant={mediaType === "video" ? "default" : "outline"}
                onClick={() => setMediaType("video")}
                className="flex-1"
              >
                <Video className="h-4 w-4 mr-2" />
                Video
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Archivo</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-purple-600 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Haz clic para subir o arrastra el archivo aquí</p>
              <Input id="file" type="file" accept={mediaType === "foto" ? "image/*" : "video/*"} className="hidden" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Descripción</Label>
            <Textarea
              id="content"
              placeholder="Escribe una descripción..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Publicando..." : "Publicar Contenido"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
