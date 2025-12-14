"use client"

import { Grid3x3, DollarSign, Heart, Bell, MessageCircle, User, Settings, HelpCircle } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: Grid3x3, label: "Dashboard", href: "/premium" },
  { icon: DollarSign, label: "Creditos", href: "/premium/credits" },
  { icon: Heart, label: "My Fav", href: "/premium/favorites" },
  { icon: Bell, label: "Notification", href: "/premium/notifications" },
  { icon: MessageCircle, label: "Message", href: "/premium/messages" },
  { icon: User, label: "My Profile", href: "/premium/profile" },
  { icon: Settings, label: "Settings", href: "/premium/settings" },
  { icon: HelpCircle, label: "Help & Support", href: "/premium/help" },
]

export function PremiumSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-card p-6">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
            H
          </div>
          <span className="font-bold text-lg">Heaven&apos;s</span>
          <span className="ml-auto text-xs font-medium px-2 py-1 rounded-full bg-purple-600 text-white">18+</span>
        </div>

        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive ? "bg-purple-600 text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
