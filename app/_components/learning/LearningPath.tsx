// app/_components/learning/LearningPath.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scroll, Book, Video, PenTool, Trophy, Lock, Star, 
  Flame, Crown, Medal, BookOpen, Sparkles, Heart, Clock,
  User, ChevronDown, ChevronUp
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import confetti from 'canvas-confetti';
import type { Course, WeeklyLesson, Chapter } from './apocalypse-data';

// Constantes para tipos de conteúdo
const CONTENT_TYPES = {
  reading: { 
    icon: Book, 
    color: 'text-blue-500', 
    label: 'Leitura',
    bgColor: 'bg-blue-50'
  },
  video: { 
    icon: Video, 
    color: 'text-purple-500', 
    label: 'Vídeo',
    bgColor: 'bg-purple-50'
  },
  quiz: { 
    icon: PenTool, 
    color: 'text-orange-500', 
    label: 'Quiz',
    bgColor: 'bg-orange-50'
  },
  exercise: { 
    icon: Scroll, 
    color: 'text-green-500', 
    label: 'Exercício',
    bgColor: 'bg-green-50'
  }
};

// Estilos compartilhados
const cardStyles = {
  completed: 'border-green-500 from-green-50 to-green-100',
  available: 'border-blue-500 from-blue-50 to-blue-100',
  locked: 'border-gray-300 from-gray-50 to-gray-100'
};

// Animações compartilhadas
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Componentes auxiliares

const StatusItem = ({ 
    icon, 
    label, 
    value, 
    bgColor 
  }: { 
    icon: React.ReactNode; 
    label: string; 
    value: string; 
    bgColor: string; 
  }) => (
    <div className="flex items-center gap-2 md:gap-3">
      <div className={`p-2 md:p-3 ${bgColor} rounded-full shadow-sm`}>
        {icon}
      </div>
      <div>
        <p className="text-xs md:text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-sm md:text-xl font-bold">{value}</p>
      </div>
    </div>
  );
  
  const NavButton = ({ 
    icon: Icon, 
    label, 
    active = false,
    onClick
  }: { 
    icon: any; 
    label: string; 
    active?: boolean;
    onClick?: () => void;
  }) => (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors duration-200
        ${active ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
  
  const WeekBadge = ({ 
    week, 
    isActive, 
    isCompleted 
  }: { 
    week: number; 
    isActive: boolean;
    isCompleted?: boolean;
  }) => (
    <Badge 
      variant={isCompleted ? "success" : isActive ? "default" : "outline"} 
      className={`text-xs md:text-sm transition-colors duration-200 ${
        isActive ? 'bg-blue-500' : 
        isCompleted ? 'bg-green-500' : ''
      }`}
    >
      Semana {week}
    </Badge>
  );

  // Componente do Card de Lição
const LessonCard = ({ chapter, onClick }: { chapter: Chapter; onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    const TypeIcon = CONTENT_TYPES[chapter.type].icon;
  
    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (chapter.status === 'available') {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#8b5cf6', '#06b6d4']
        });
        onClick();
      }
    };
  
    return (
      <motion.div
        whileHover={chapter.status !== 'locked' ? { scale: 1.02, y: -5 } : {}}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative w-full md:w-80"
      >
        <Card
          className={`p-4 md:p-6 transition-all duration-500 border-2
                     bg-gradient-to-br ${cardStyles[chapter.status]}
                     ${chapter.status !== 'locked' ? 'hover:shadow-xl cursor-pointer' : 'cursor-not-allowed'}`}
          onClick={handleClick}
        >
          {/* Header do Card */}
          <div className="flex justify-between items-start mb-3 md:mb-4">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="text-2xl md:text-3xl">{chapter.icon}</span>
              <TypeIcon className={`w-5 h-5 md:w-6 md:h-6 ${CONTENT_TYPES[chapter.type].color}`} />
            </div>
            {chapter.status === 'locked' ? (
              <Lock className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
            ) : (
              <Badge variant="secondary" className="text-xs md:text-sm font-medium">
                {chapter.xpReward} XP
              </Badge>
            )}
          </div>
  
          {/* Conteúdo */}
          <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 line-clamp-2">
            {chapter.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3 line-clamp-2">
            {chapter.description}
          </p>
  
          {/* Metadados */}
          <div className="grid grid-cols-2 gap-2 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-1 md:gap-2">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              {chapter.estimatedTime} min
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
              <span>{Array(chapter.difficulty).fill('⭐').join('')}</span>
            </div>
          </div>
  
          {/* Texto Motivacional no Hover */}
          <AnimatePresence>
            {isHovered && chapter.status !== 'locked' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t 
                         from-white via-white to-transparent rounded-b-lg"
              >
                <p className="text-sm font-medium text-gray-800 italic">
                  "{chapter.motivationalText}"
                </p>
              </motion.div>
            )}
          </AnimatePresence>
  
          {/* Botão de Começar */}
          {chapter.status === 'available' && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 md:mt-4 w-full py-1.5 md:py-2 px-4 bg-blue-500 
                       text-white rounded-lg text-sm md:text-base font-medium 
                       hover:bg-blue-600 transition-colors shadow-sm"
              onClick={handleClick}
            >
              Começar Jornada
            </motion.button>
          )}
  
          {/* Status Badge */}
          {chapter.status === 'completed' && (
            <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1 shadow-lg">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          )}
        </Card>
      </motion.div>
    );
  };

  // Componente da Seção Semanal
const WeekSection = ({ 
    lesson, 
    isCurrentWeek, 
    onChapterClick 
  }: { 
    lesson: WeeklyLesson; 
    isCurrentWeek: boolean;
    onChapterClick: (chapter: Chapter) => void;
  }) => {
    const [isExpanded, setIsExpanded] = useState(isCurrentWeek);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        {/* Header da Semana */}
        <motion.div 
          className="relative py-6 mb-8 cursor-pointer rounded-lg"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.01 }}
        >
          <div className={`absolute inset-0 ${
            isCurrentWeek 
              ? 'bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50' 
              : 'bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50'
          } opacity-50 rounded-lg`} />
          
          <div className="relative px-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-4">
                <WeekBadge 
                  week={lesson.weekNumber} 
                  isActive={isCurrentWeek}
                  isCompleted={false} // Você pode adicionar lógica para verificar se a semana está completa
                />
                <Badge variant="secondary" className="text-sm">
                  {lesson.chapters.length} capítulos
                </Badge>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold mb-2">{lesson.title}</h2>
            <p className="text-gray-600 text-sm md:text-base">{lesson.description}</p>
            
            {/* Princípios da Semana */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 bg-white/50 rounded-lg p-4"
                >
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    Princípios Fundamentais:
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {lesson.principles.map((principle, index) => (
                      <li key={index} className="leading-relaxed">
                        {principle}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
  
        {/* Cards dos Capítulos */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-8"
            >
              {lesson.chapters.map((chapter, index) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`
                    flex justify-center
                    md:${index % 2 === 0 ? 'justify-end pr-[55%]' : 'justify-start pl-[55%]'}
                  `}
                >
                  <LessonCard
                    chapter={chapter}
                    onClick={() => onChapterClick(chapter)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  // Componente Principal
const LearningPath = ({ course }: { course: Course }) => {
    const [currentStreak, setCurrentStreak] = useState(5);
    const [totalXP, setTotalXP] = useState(450);
    const [level, setLevel] = useState(3);
    const [currentWeek, setCurrentWeek] = useState(16); // Começa na semana 16 para o Apocalipse
  
    const handleChapterClick = (chapter: Chapter) => {
      if (chapter.status !== 'locked') {
        // Aqui você pode adicionar a navegação para o conteúdo
        console.log(`Iniciando capítulo: ${chapter.id}`);
        
        // Exemplo de como atualizar o XP (você pode ajustar conforme necessário)
        setTotalXP(prev => prev + chapter.xpReward);
        
        // Atualiza o nível baseado no XP total
        const newLevel = Math.floor(totalXP / 500) + 1;
        if (newLevel !== level) {
          setLevel(newLevel);
          // Efeito de confetti para novo nível
          confetti({
            particleCount: 150,
            spread: 180,
            origin: { y: 0.6 }
          });
        }
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-6 md:py-12">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-6 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 bg-clip-text text-transparent 
                          bg-gradient-to-r from-blue-600 to-purple-600 px-2">
              {course.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 md:mb-8 px-4">
              {course.description}
            </p>
          </motion.div>
  
          {/* Painel de Status */}
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 md:mb-8"
            {...fadeInUp}
          >
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              <StatusItem
                icon={<Flame className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />}
                label="Sequência"
                value={`${currentStreak} dias`}
                bgColor="bg-orange-100"
              />
              <StatusItem
                icon={<Trophy className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />}
                label="XP Total"
                value={`${totalXP} XP`}
                bgColor="bg-yellow-100"
              />
              <StatusItem
                icon={<Crown className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />}
                label="Nível"
                value={`Nível ${level}`}
                bgColor="bg-purple-100"
              />
            </div>
  
            {/* Barra de Progresso para Próximo Nível */}
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>Progresso para Nível {level + 1}</span>
                <span>{totalXP % 500}/500 XP</span>
              </div>
              <Progress value={(totalXP % 500) / 5} className="h-2" />
            </div>
          </motion.div>
  
          {/* Seções Semanais */}
          <div className="relative">
            {/* Linha de Progresso */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 md:w-2 
                           bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 
                           transform -translate-x-1/2 rounded-full" />
  
            {course.weeklyLessons.map((lesson) => (
              <WeekSection
                key={lesson.id}
                lesson={lesson}
                isCurrentWeek={lesson.weekNumber === currentWeek}
                onChapterClick={handleChapterClick}
              />
            ))}
          </div>
  
          {/* Navegação Mobile */}
          <motion.div 
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 
                       p-3 flex justify-around items-center md:hidden z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
          >
            <NavButton icon={Book} label="Lições" active />
            <NavButton icon={Trophy} label="Conquistas" />
            <NavButton icon={Heart} label="Favoritos" />
            <NavButton icon={User} label="Perfil" />
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default LearningPath;