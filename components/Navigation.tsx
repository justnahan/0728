"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ShoppingCart, User, Heart } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { name: '心情選物', href: '/mood-shopping' as const },
    { name: 'MoodBox訂閱', href: '/subscription' as const },
    { name: '生活靈感', href: '/lifestyle' as const },
    { name: '會員中心', href: '/profile' as const },
  ] as const

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="page-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-accent mr-2" />
              <span className="text-2xl font-bold text-foreground tracking-tight">
                DailyMood
              </span>
              <span className="ml-2 text-sm text-muted-foreground">每日選物</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cart and User icons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-xs text-accent-foreground flex items-center justify-center">
                  0
                </span>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">開啟選單</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {/* Quick Mood Selection */}
                  <div className="pb-4 border-b border-border">
                    <Link 
                      href="/mood-shopping"
                      className="mood-button w-full text-center block"
                      onClick={() => setIsOpen(false)}
                    >
                      💭 立即心情選物
                    </Link>
                  </div>
                  
                  {/* Navigation Items */}
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Cart and Profile */}
                  <div className="pt-4 border-t border-border flex space-x-4">
                    <Button variant="outline" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      購物車 (0)
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <User className="h-4 w-4 mr-2" />
                      會員
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}