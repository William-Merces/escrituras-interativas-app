import LearningPath from '@/app/_components/learning/LearningPath';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Curso do Apocalipse | Escrituras Interativas',
  description: 'Aprenda o livro do Apocalipse de forma interativa e estruturada'
};

const courseSections = [
  {
    id: 'introducao',
    title: 'Introdução ao Apocalipse',
    lessons: [
      {
        id: '1',
        title: 'Contexto Histórico',
        description: 'Entenda o contexto da escrita do Apocalipse',
        status: 'completed',
        icon: '📜',
        position: 'left',
        type: 'reading',
        duration: 15
      },
      {
        id: '2',
        title: 'Visão Geral',
        description: 'Panorama do livro do Apocalipse',
        status: 'available',
        icon: '🗺️',
        position: 'right',
        type: 'video',
        duration: 10
      },
      {
        id: '3',
        title: 'Simbolismo',
        description: 'Compreendendo a linguagem apocalíptica',
        status: 'locked',
        icon: '🔍',
        position: 'left',
        type: 'exercise',
        duration: 20
      }
    ]
  },
  {
    id: 'sete-igrejas',
    title: 'As Sete Igrejas',
    lessons: [
      {
        id: '4',
        title: 'Éfeso',
        description: 'A igreja que deixou seu primeiro amor',
        status: 'locked',
        icon: '🕯️',
        position: 'right',
        type: 'reading',
        duration: 15
      },
      {
        id: '5',
        title: 'Esmirna',
        description: 'A igreja perseguida',
        status: 'locked',
        icon: '👑',
        position: 'left',
        type: 'quiz',
        duration: 10
      }
    ]
  }
];

export default function ApocalipsePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Apocalipse</h1>
          <p className="text-lg text-gray-600">
            Explore as revelações e símbolos do último livro da Bíblia
          </p>
        </header>

        <LearningPath 
          sections={courseSections}
          currentStreak={3}
        />
      </div>
    </main>
  );
}