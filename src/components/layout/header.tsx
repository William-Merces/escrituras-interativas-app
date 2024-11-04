"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, BookOpen, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Início', href: '/' },
  {
    name: 'Cursos',
    href: '/cursos',
    submenu: [
      { name: 'Evangelho de João', href: '/cursos/evangelhoJoao' },
      { name: 'Cartas de João', href: '/cursos/cartasJoao' },
      { name: 'Apocalipse', href: '/cursos/apocalipse' },
    ]
  },
  { name: 'Sobre', href: '/sobre' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/80 backdrop-blur-lg shadow-sm'
        : 'bg-background/40 backdrop-blur-md'
      }`}>

      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Escrituras Interativas
              </span>
            </motion.div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative"
          >
            <span className="sr-only">Abrir menu principal</span>
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
              onMouseLeave={() => setActiveSubmenu(null)}
              className="relative"
            >
              <Link
                href={item.href}
                className={`text-sm font-semibold leading-6 flex items-center gap-1 ${pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                )}
              </Link>

              {/* Submenu */}
              {item.submenu && activeSubmenu === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                >
                  <div className="py-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {theme === 'light' ? (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>

          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/registro">
              <Button>Criar Conta</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50">
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <div key={item.name}>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                          {item.submenu && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.submenu.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subitem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="py-6 space-y-4">
                      <Link
                        href="/auth/login"
                        className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-foreground hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/auth/registro"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button className="w-full">
                          Criar Conta
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}