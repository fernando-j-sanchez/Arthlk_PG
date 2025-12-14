import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"
import Link from "next/link"

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-background">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Mail className="h-12 w-12 text-purple-600" />
            </div>
            <CardTitle className="text-2xl">Confirma tu Email</CardTitle>
            <CardDescription>
              Te hemos enviado un email de confirmación. Por favor revisa tu bandeja de entrada y haz clic en el enlace
              para activar tu cuenta.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/auth/login">
              <Button className="w-full">Volver al Login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
