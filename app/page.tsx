import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gamepad2, Lock, Star, TrendingUp, Zap, Crown } from "lucide-react"

export default function HomePage() {
  const games = [
    {
      id: 1,
      title: "Cyber Legends",
      category: "Battle Royale",
      image: "/futuristic-battle-royale-game.jpg",
      players: "2.5M",
      rating: 4.8,
      trending: true,
    },
    {
      id: 2,
      title: "Dragon's Quest",
      category: "RPG",
      image: "/epic-dragon-fantasy-rpg.jpg",
      players: "1.8M",
      rating: 4.9,
      trending: true,
    },
    {
      id: 3,
      title: "Speed Rivals",
      category: "Racing",
      image: "/street-racing-neon-lights.jpg",
      players: "1.2M",
      rating: 4.7,
    },
    {
      id: 4,
      title: "Space Warriors",
      category: "Shooter",
      image: "/space-shooter-combat.jpg",
      players: "3.1M",
      rating: 4.6,
    },
    {
      id: 5,
      title: "Kingdom Builder",
      category: "Strategy",
      image: "/medieval-kingdom-strategy.jpg",
      players: "890K",
      rating: 4.5,
    },
    {
      id: 6,
      title: "Dungeon Crawlers",
      category: "Adventure",
      image: "/dark-dungeon-adventure.jpg",
      players: "1.5M",
      rating: 4.8,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              ARTHLK
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#games"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Juegos
            </Link>
            <Link
              href="#premium"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Premium
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-pink-500/10" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <Zap className="mr-1 h-3 w-3" />
              Heaven&apos;s Gaming Platform
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Los Mejores Juegos en un Solo Lugar</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Explora nuestra colección de juegos premium. Únete a millones de jugadores y desbloquea contenido
              exclusivo.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#games">
                <Button size="lg" className="gap-2">
                  <Gamepad2 className="h-5 w-5" />
                  Explorar Juegos
                </Button>
              </Link>
              <Link href="#premium">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                  <Crown className="h-5 w-5" />
                  Ver Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section id="games" className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Juegos Populares</h3>
            <p className="text-muted-foreground">Los más jugados de la comunidad</p>
          </div>
          <Badge variant="secondary" className="gap-1">
            <TrendingUp className="h-3 w-3" />
            En Tendencia
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="group overflow-hidden border-2 hover:border-primary transition-colors">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {game.trending && (
                  <Badge className="absolute top-3 right-3 bg-primary">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{game.title}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {game.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold">{game.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{game.players} jugadores</p>
                  <Button size="sm" variant="secondary">
                    Jugar Ahora
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Premium Section - LOCKED */}
      <section id="premium" className="border-t bg-gradient-to-b from-background to-primary/5">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary">
              {/* Lock Overlay */}
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <div className="relative bg-primary/10 p-8 rounded-full border-2 border-primary">
                    <Lock className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <h4 className="text-3xl font-bold mb-3 text-center">Contenido Premium Bloqueado</h4>
                <p className="text-muted-foreground text-center mb-6 max-w-md text-balance">
                  Accede a contenido exclusivo, juegos sin anuncios y beneficios especiales
                </p>
                <Link href="/auth/register">
                  <Button size="lg" className="gap-2">
                    <Crown className="h-5 w-5" />
                    Desbloquear Premium
                  </Button>
                </Link>
              </div>

              {/* Blurred Preview */}
              <div className="p-8 blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">Heaven&apos;s Premium</h3>
                    <p className="text-muted-foreground">Contenido Exclusivo para Miembros</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h5 className="font-semibold mb-2">Sin Anuncios</h5>
                    <p className="text-sm text-muted-foreground">Juega sin interrupciones</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h5 className="font-semibold mb-2">Contenido Exclusivo</h5>
                    <p className="text-sm text-muted-foreground">Acceso a material premium</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h5 className="font-semibold mb-2">Juegos Early Access</h5>
                    <p className="text-sm text-muted-foreground">Prueba juegos antes que nadie</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h5 className="font-semibold mb-2">Chat con Creadores</h5>
                    <p className="text-sm text-muted-foreground">Interactúa directamente</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/diverse-gaming-avatars.png" alt="Creator" className="w-20 h-20 rounded-full" />
                  <img src="/gaming-avatar-2.png" alt="Creator" className="w-20 h-20 rounded-full" />
                  <img src="/gaming-avatar-3.png" alt="Creator" className="w-20 h-20 rounded-full" />
                  <div className="text-sm text-muted-foreground">+50 creadores</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">ARTHLK</span>
              </div>
              <p className="text-sm text-muted-foreground">Heaven&apos;s Gaming Platform. Solo +18</p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Juegos</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Battle Royale</li>
                <li>RPG</li>
                <li>Racing</li>
                <li>Shooter</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Compañía</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Nosotros</li>
                <li>Contacto</li>
                <li>Soporte</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Legal</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Términos</li>
                <li>Privacidad</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 ARTHLK. Todos los derechos reservados. Contenido solo para mayores de 18 años.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
