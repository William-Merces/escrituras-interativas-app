// app/curso/apocalipse/page.tsx

import { apocalypseCourse } from '@/app/_components/learning/apocalypse-data';
import LearningPath from '@/app/_components/learning/LearningPath';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apocalipse: Visões de Esperança | Escrituras Interativas',
  description: 'Explore as revelações proféticas de João em uma jornada interativa e inspiradora'
};

export default function ApocalipsePage() {
  return (
    <main>
      <LearningPath course={apocalypseCourse} />
    </main>
  );
}