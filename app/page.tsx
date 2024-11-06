// app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Scroll, Heart, Star, Book, Users, Video,
  Sparkles, Compass, Leaf, MessageSquare,
  Map, Award, Gift, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const features = [
  {
    icon: Heart,
    title: "Conexão Espiritual",
    description: "Aprofunde sua relação com Deus através do estudo imersivo"
  },
  {
    icon: Compass,
    title: "Jornada Guiada",
    description: "Trilhas personalizadas para seu crescimento espiritual"
  },
  {
    icon: Users,
    title: "Comunidade Viva",
    description: "Compartilhe experiências e cresça em comunidade"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-950" />
          <div className="absolute inset-0 bg-grid-primary/10 dark:bg-grid-blue-900/10" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <Badge
              variant="secondary"
              className="text-lg py-2 px-4 dark:bg-blue-900/30 dark:text-blue-100 dark:border-blue-800"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Uma Jornada Espiritual Única
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
                Escrituras Interativas
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground dark:text-gray-400 leading-relaxed">
              Embarque em uma jornada transformadora pelos escritos de João, o Amado.
              Conecte-se mais profundamente com as escrituras através de uma
              experiência única de aprendizado e crescimento espiritual.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-12">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 bg-white/50 dark:bg-gray-900 border-primary/10 dark:border-blue-900/30 hover:border-primary/20 dark:hover:border-blue-800/50 backdrop-blur-sm transition-all duration-300"
                >
                  <feature.icon className="w-8 h-8 text-primary dark:text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-400">{feature.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Jornada Section */}
      <section className="py-24 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="dark:border-blue-800 dark:text-blue-400"
              >
                <Leaf className="w-4 h-4 mr-2" />
                Crescimento Espiritual
              </Badge>

              <h2 className="text-4xl font-bold dark:text-white">
                Uma Jornada de Transformação
              </h2>

              <p className="text-xl text-muted-foreground dark:text-gray-400">
                Cada passo em sua jornada foi cuidadosamente projetado para
                proporcionar não apenas conhecimento, mas uma verdadeira
                experiência de transformação e conexão espiritual.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Estudo Profundo",
                    description: "Explore os significados mais profundos das escrituras"
                  },
                  {
                    title: "Aplicação Prática",
                    description: "Conecte os ensinamentos com sua vida diária"
                  },
                  {
                    title: "Reflexão Guiada",
                    description: "Momentos dedicados para meditação e crescimento"
                  }
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-white/50 dark:bg-gray-800 border-primary/10 dark:border-blue-900/30 hover:border-primary/20 dark:hover:border-blue-800/50 backdrop-blur-sm"
                  >
                    <h3 className="font-semibold mb-1 dark:text-white">{item.title}</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-lg overflow-hidden aspect-square bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-gray-900 border border-blue-200 dark:border-blue-900"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-6">
                    <span className="text-6xl">🗺️</span>
                    <p className="text-xl font-medium dark:text-white">Sua Jornada Começa Aqui</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Progresso e Gamificação */}
      <section className="py-24 relative overflow-hidden dark:bg-gray-950">
        <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-950/20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="secondary"
              className="mb-4 dark:bg-blue-900/30 dark:text-blue-100"
            >
              <Award className="w-4 h-4 mr-2" />
              Sua Jornada de Aprendizado
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Acompanhe Seu Progresso Espiritual
            </h2>
            <p className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Cada passo em sua jornada é uma conquista. Desenvolva-se enquanto
              explora as escrituras de forma envolvente e significativa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Objetivos Claros",
                description: "Trilhas de estudo organizadas com metas alcançáveis",
                color: "dark:from-blue-900 dark:to-blue-950"
              },
              {
                icon: "⭐",
                title: "Conquistas Especiais",
                description: "Desbloqueie conquistas à medida que aprofunda seu conhecimento",
                color: "dark:from-blue-950 dark:to-gray-900"
              },
              {
                icon: "🌟",
                title: "Progresso Visual",
                description: "Acompanhe sua evolução com mapas interativos e estatísticas",
                color: "dark:from-gray-900 dark:to-blue-950"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-full group bg-white/50 dark:bg-gray-900 border-primary/10 dark:border-blue-900/30 hover:border-primary/20 dark:hover:border-blue-800/50 backdrop-blur-sm transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative p-6 space-y-4">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-xl font-semibold dark:text-white">{item.title}</h3>
                    <p className="text-muted-foreground dark:text-gray-400">{item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Preview do Sistema de Progresso */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-blue-100 dark:border-blue-900/30"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: "28", label: "Lições Disponíveis" },
                { value: "3", label: "Jornadas Completas" },
                { value: "12+", label: "Conquistas Especiais" },
                { value: "∞", label: "Possibilidades de Crescimento" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Comunidade */}
      <section className="py-24 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge
              variant="outline"
              className="mb-4 dark:border-blue-800 dark:text-blue-400"
            >
              <Users className="w-4 h-4 mr-2" />
              Comunidade Viva
            </Badge>
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Cresça em Comunidade
            </h2>
            <p className="text-xl text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              Compartilhe experiências, participe de discussões enriquecedoras e
              faça parte de uma comunidade dedicada ao crescimento espiritual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Fóruns de Discussão",
                description: "Participe de debates enriquecedores e compartilhe suas descobertas",
                highlight: "Interação Ativa"
              },
              {
                icon: Video,
                title: "Aulas ao Vivo",
                description: "Encontros semanais às quartas-feiras às 20h com discussões profundas",
                highlight: "Toda Quarta"
              },
              {
                icon: Book,
                title: "Recursos Exclusivos",
                description: "Acesse materiais complementares e aprofunde seus estudos",
                highlight: "Conteúdo Rico"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <Card className="h-full p-6 bg-white/50 dark:bg-gray-900 border-primary/10 dark:border-blue-900/30 hover:border-primary/20 dark:hover:border-blue-800/50 backdrop-blur-sm transition-all duration-300">
                  <div className="absolute top-0 right-0 mt-4 mr-4">
                    <Badge variant="secondary" className="text-xs dark:bg-blue-900/50 dark:text-blue-200">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10 dark:bg-blue-900/30 w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                  <p className="text-muted-foreground dark:text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 relative overflow-hidden dark:bg-gray-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-blue-950 dark:via-gray-900 dark:to-blue-950 opacity-50" />
          <div className="absolute inset-0 bg-grid-primary/10 dark:bg-grid-blue-900/10" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <Badge
              variant="secondary"
              className="text-lg py-2 px-4 dark:bg-blue-900/30 dark:text-blue-100"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Comece Sua Jornada
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
              Pronto para Transformar sua Forma de
              Estudar as Escrituras?
            </h2>

            <p className="text-xl text-muted-foreground dark:text-gray-400">
              Junte-se a nossa comunidade e descubra uma forma mais profunda e
              significativa de conectar-se com os escritos de João, o Amado.
            </p>

            <div className="pt-8 flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white"
              >
                <Zap className="mr-2 h-5 w-5" />
                Criar Conta Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-900/50"
              >
                Conhecer o Curso
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
