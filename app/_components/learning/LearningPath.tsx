import React from 'react';
import { motion } from 'framer-motion';
import LessonCard from './LessonCard';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Flame } from 'lucide-react';
import type { LearningPathSection } from '@/types/learning-path';

interface LearningPathProps {
  sections: LearningPathSection[];
  currentStreak?: number;
}

export default function LearningPath({ sections, currentStreak = 0 }: LearningPathProps) {
  return (
    <div className="max-w-5xl mx-auto py-8">
      {/* Header com streak */}
      <div className="flex justify-center mb-8">
        <Badge variant="secondary" className="px-4 py-2 text-lg flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-500" />
          <span>{currentStreak} dias de estudo</span>
        </Badge>
      </div>

      {/* Container da trilha */}
      <div className="relative">
        {/* Linha de conexão central */}
        <div 
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-green-200 
                     transform -translate-x-1/2 rounded-full"
        />

        {/* Seções da trilha */}
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.2 }}
            className="mb-16"
          >
            {/* Título da seção */}
            <div className="flex justify-center mb-8">
              <h2 className="text-2xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm">
                {section.title}
              </h2>
            </div>

            {/* Lições da seção */}
            <div className="space-y-12">
              {section.lessons.map((lesson, lessonIndex) => (
                <div
                  key={lesson.id}
                  className={`flex ${
                    lesson.position === 'left' 
                      ? 'justify-end pr-[53%]' 
                      : lesson.position === 'right'
                      ? 'justify-start pl-[53%]'
                      : 'justify-center'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: lesson.position === 'left' ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.2) + (lessonIndex * 0.1) }}
                  >
                    <LessonCard 
                      lesson={lesson}
                      onClick={() => {
                        if (lesson.status !== 'locked') {
                          // Aqui implementaremos a navegação para a lição
                          console.log(`Navegando para lição: ${lesson.id}`);
                        }
                      }}
                    />
                  </motion.div>

                  {/* Conectores entre cards */}
                  {lessonIndex < section.lessons.length - 1 && (
                    <motion.div
                      className="absolute left-1/2 transform -translate-x-1/2"
                      style={{
                        top: `${(lessonIndex + 1) * 180}px`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: (sectionIndex * 0.2) + (lessonIndex * 0.1) + 0.1 }}
                    >
                      <ArrowDown className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}