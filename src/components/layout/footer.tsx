"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Book, Github, Twitter, Facebook, Mail, Heart } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contato', href: '/contato' },
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Termos', href: '/termos' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/seu-usuario/escrituras-interativas',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/seu-usuario',
      icon: Twitter,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/seu-usuario',
      icon: Facebook,
    },
    {
      name: 'Email',
      href: 'mailto:contato@escriturasinterativas.com.br',
      icon: Mail,
    },
  ],
  features: [
    { name: 'Cursos Interativos', description: 'Aprenda de forma dinâmica e envolvente' },
    { name: 'Comunidade', description: 'Participe de discussões enriquecedoras' },
    { name: 'Recursos', description: 'Acesse materiais exclusivos' },
    { name: 'Progresso', description: 'Acompanhe sua evolução' },
  ]
}

export function Footer() {
  return (
    <footer className="bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link href="/">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Book className="h-8 w-8 text-primary" />
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                  Escrituras Interativas
                </span>
              </motion.div>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Uma plataforma moderna para o estudo das escrituras, combinando tecnologia 
              e sabedoria eterna para uma experiência única de aprendizado.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.features.slice(0, 2).map((feature) => (
                    <li key={feature.name}>
                      <div className="text-sm leading-6">
                        <h4 className="text-foreground">{feature.name}</h4>
                        <p className="text-muted-foreground text-xs mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Mais Recursos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.features.slice(2).map((feature) => (
                    <li key={feature.name}>
                      <div className="text-sm leading-6">
                        <h4 className="text-foreground">{feature.name}</h4>
                        <p className="text-muted-foreground text-xs mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.slice(0, 3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.slice(3).map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Escrituras Interativas. Todos os direitos reservados.
            </p>
            <motion.div 
              className="flex items-center text-xs text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              Feito com <Heart className="h-4 w-4 mx-1 text-red-500" /> para a glória de Deus
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}