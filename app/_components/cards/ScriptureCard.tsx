import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface ScriptureCardProps {
  title: string;
  book: string;
  chapter: number;
  verses: string;
  content: string;
}

const ScriptureCard = ({ title, book, chapter, verses, content }: ScriptureCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors duration-300">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-primary/10 [mask-image:radial-gradient(white,transparent_85%)]" />
      
      {/* Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardHeader className="relative">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {book} {chapter}:{verses}
          </p>
        </div>
      </CardHeader>

      <CardContent className="relative">
        <p className="text-foreground/80">
          {content}
        </p>
        
        {/* Hover Effect Corner */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-tl-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      </CardContent>
    </Card>
  );
};

export default ScriptureCard;