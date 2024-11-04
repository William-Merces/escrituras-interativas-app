"use client"

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Book, Users, MessageCircle, ChevronRight, Sparkles, ScrollText, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    icon: ScrollText,
    title: "Estudo Interativo",
    description: "Aprenda em seu próprio ritmo com materiais dinâmicos e envolventes.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Estude junto com outros alunos e compartilhe suas descobertas.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "Gamificação",
    description: "Ganhe pontos, conquistas e acompanhe seu progresso.",
    gradient: "from-amber-500 to-orange-500"
  }
]

const courses = [
  {
    id: 'evangelhoJoao',
    title: 'O Evangelho de João',
    icon: '📖',
    description: 'Uma jornada profunda pelo quarto evangelho',
    highlights: ['24 capítulos', 'Vida de Jesus', 'Sinais e discursos'],
    gradient: "from-blue-500 to-indigo-500",
    progress: 30
  },
  {
    id: 'cartasJoao',
    title: 'As Cartas de João',
    icon: '✉️',
    description: 'Explorando as três epístolas joaninas',
    highlights: ['5 capítulos', 'Amor fraternal', 'Verdade e erro'],
    gradient: "from-purple-500 to-pink-500",
    progress: 0
  },
  {
    id: 'apocalipse',
    title: 'Apocalipse',
    icon: '🌟',
    description: 'Desvendando o livro da revelação',
    highlights: ['22 capítulos', 'Visões proféticas', 'Esperança final'],
    gradient: "from-amber-500 to-red-500",
    progress: 0
  }
]

export default function Home() {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section com Background Animado */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center space-y-6 max-w-3xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Escrituras Interativas
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Uma jornada envolvente através das escrituras, combinando 
            tecnologia moderna com sabedoria eterna
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/auth/registro">
              <Button size="lg" className="group">
                Começar Jornada
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/sobre">
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Recursos Incríveis</h2>
            <p className="text-muted-foreground">
              Descubra uma nova forma de estudar as escrituras
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <CardHeader>
                    <div className="mb-2 p-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Cursos Disponíveis</h2>
            <p className="text-muted-foreground">
              Escolha seu caminho de aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                onHoverStart={() => setHoveredCourse(course.id)}
                onHoverEnd={() => setHoveredCourse(null)}
                whileHover={{ y: -5 }}
              >
                <Link href={`/cursos/${course.id}`}>
                  <Card className="h-full group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    {/* Progress Bar */}
                    {course.progress > 0 && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200">
                        <div 
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    )}

                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{course.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {course.description}
                      </p>

                      <AnimatePresence>
                        {hoveredCourse === course.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-2"
                          >
                            {course.highlights.map((highlight, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <Star className="w-4 h-4 text-primary" />
                                <span>{highlight}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Status Tag */}
                      {course.progress === 0 ? (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          Novo
                        </div>
                      ) : (
                        <div className="absolute top-4 right-4 px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">
                          Em Progresso
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-primary/5 to-background">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Comece Sua Jornada Hoje
            </h2>
            <p className="text-muted-foreground mb-8">
              Junte-se a nossa comunidade e descubra uma nova forma de estudar as escrituras
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/auth/registro">
                <Button size="lg" className="group">
                  Criar Conta Gratuita
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline">
                  Já tenho uma conta
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}