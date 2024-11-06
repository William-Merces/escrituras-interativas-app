import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Lock, CheckCircle, BookOpen, Video, PenTool, ScrollText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/types/learning-path";

interface LessonCardProps {
  lesson: Lesson;
  onClick?: () => void;
}

const statusConfig = {
  completed: {
    containerClass: "border-green-500 hover:border-green-600",
    icon: CheckCircle,
    iconClass: "text-green-500",
    badgeClass: "bg-green-100 text-green-800"
  },
  available: {
    containerClass: "border-blue-500 hover:border-blue-600",
    icon: BookOpen,
    iconClass: "text-blue-500",
    badgeClass: "bg-blue-100 text-blue-800"
  },
  locked: {
    containerClass: "border-gray-300 hover:border-gray-400",
    icon: Lock,
    iconClass: "text-gray-500",
    badgeClass: "bg-gray-100 text-gray-800"
  }
};

const typeConfig = {
  quiz: { icon: PenTool, label: "Quiz" },
  reading: { icon: ScrollText, label: "Leitura" },
  exercise: { icon: BookOpen, label: "Exercício" },
  video: { icon: Video, label: "Vídeo" }
};

export default function LessonCard({ lesson, onClick }: LessonCardProps) {
  const status = statusConfig[lesson.status];
  const type = typeConfig[lesson.type];
  const TypeIcon = type.icon;
  const StatusIcon = status.icon;

  return (
    <Card 
      onClick={lesson.status !== 'locked' ? onClick : undefined}
      className={cn(
        "w-72 transition-all duration-300 cursor-pointer",
        "transform hover:scale-105",
        lesson.status !== 'locked' && "hover:shadow-lg",
        status.containerClass
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <StatusIcon className={cn("w-5 h-5", status.iconClass)} />
          <span className="text-xl">{lesson.icon}</span>
        </div>
        <Badge className={status.badgeClass}>
          <Clock className="w-3 h-3 mr-1" />
          {lesson.duration}min
        </Badge>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-1">{lesson.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <TypeIcon className="w-4 h-4" />
          <span>{type.label}</span>
        </div>
      </CardContent>
    </Card>
  );
}