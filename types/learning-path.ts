export type LessonStatus = 'completed' | 'available' | 'locked';
export type LessonPosition = 'left' | 'right' | 'center';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  status: LessonStatus;
  icon: string;
  position: LessonPosition;
  type: 'quiz' | 'reading' | 'exercise' | 'video';
  duration: number; // em minutos
}

export interface LearningPathSection {
  id: string;
  title: string;
  lessons: Lesson[];
}