// app/_components/navigation/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, Sun, Moon, ChevronDown,
    BookOpen, ScrollText, Sparkles,
    Video, Activity
} from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLive, setIsLive] = useState(false); // Simular estado de aula ao vivo
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const courses = [
        {
            title: "Evangelho de João",
            description: "A visão do discípulo amado",
            icon: BookOpen
        },
        {
            title: "Cartas de João",
            description: "Mensagens às igrejas",
            icon: ScrollText
        },
        {
            title: "Apocalipse",
            description: "A revelação final",
            icon: Sparkles
        }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ${isScrolled
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
                            Escrituras Interativas
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Cursos Dropdown */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex items-center space-x-1 dark:text-gray-200 dark:hover:text-white"
                                >
                                    <span>Cursos</span>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-56 mt-2 bg-white/95 backdrop-blur-sm shadow-lg border-gray-200 dark:bg-gray-900 dark:border-blue-900/30 z-[60]"
                                align="start"
                                sideOffset={6}
                            >
                                {courses.map((course) => (
                                    <DropdownMenuItem key={course.title} className="p-3">
                                        <div className="flex items-start space-x-3">
                                            <course.icon className="w-5 h-5 text-primary dark:text-blue-400 mt-0.5" />
                                            <div>
                                                <p className="font-medium dark:text-white">{course.title}</p>
                                                <p className="text-sm text-muted-foreground dark:text-gray-400">
                                                    {course.description}
                                                </p>
                                            </div>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Link href="/comunidade" className="text-foreground/80 hover:text-foreground dark:text-gray-300 dark:hover:text-white transition-colors">
                            Comunidade
                        </Link>

                        <Link href="/recursos" className="text-foreground/80 hover:text-foreground dark:text-gray-300 dark:hover:text-white transition-colors">
                            Recursos
                        </Link>

                        {/* Botão Aula ao Vivo */}
                        <a
                            href="https://meet.google.com/dfv-fskb-apq"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="relative group hover:border-blue-500 dark:hover:border-blue-400"
                            >
                                <div className="flex items-center gap-2">
                                    <Video className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-sm font-medium">Aula ao Vivo</span>
                                        <span className="text-xs text-muted-foreground">Quarta • 20h</span>
                                    </div>
                                    {isLive && (
                                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full">
                                            <span className="absolute inset-0 rounded-full bg-red-500 animate-ping" />
                                        </span>
                                    )}
                                </div>
                            </Button>
                        </a>

                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="dark:text-gray-300 dark:hover:text-white"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        >
                            {mounted && theme === 'dark' ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </Button>

                        {/* Login/Registro */}
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                            Entrar
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden"
                        >
                            <div className="py-4 space-y-4">
                                {courses.map((course) => (
                                    <Link
                                        key={course.title}
                                        href={`/cursos/${course.title.toLowerCase()}`}
                                        className="flex items-center space-x-3 px-4 py-2 hover:bg-primary/10 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <course.icon className="w-5 h-5 text-primary dark:text-blue-400" />
                                        <div>
                                            <p className="font-medium dark:text-white">{course.title}</p>
                                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                                                {course.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}

                                <div className="space-y-2 px-4">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Users className="w-5 h-5 mr-2" />
                                        Comunidade
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Recursos
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start ${isLive ? 'text-red-600 dark:text-red-400' : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <Video className="w-5 h-5 mr-2" />
                                        Aula ao Vivo
                                        {isLive && (
                                            <span className="ml-2 w-2 h-2 bg-red-600 rounded-full">
                                                <span className="absolute inset-0 rounded-full bg-red-600 animate-ping" />
                                            </span>
                                        )}
                                    </Button>

                                    <Button
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Entrar
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;