'use client';

import Link from 'next/link';
import {
    Instagram,
    Facebook,
    Mail,
    MapPin,
    Phone,
    Github,
    Code
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo e Descrição */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-200 bg-clip-text text-transparent">
                            Escrituras Interativas
                        </h3>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
                            Uma iniciativa do Instituto de Religião para proporcionar uma experiência
                            única e envolvente no estudo das escrituras.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/sobre" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <Link href="/cursos" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                                    Nossos Cursos
                                </Link>
                            </li>
                            <li>
                                <Link href="/comunidade" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                                    Comunidade
                                </Link>
                            </li>
                            <li>
                                <Link href="/recursos" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                                    Recursos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                <span className="text-gray-600 dark:text-gray-400">(00) 1234-5678</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                <a href="mailto:contato@instituto.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                                    contato@instituto.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                                <span className="text-gray-600 dark:text-gray-400">R. Santa Albina, 95 - Jardim Trussardi, São Paulo - SP, 05518-000</span>
                            </li>
                        </ul>

                        {/* Redes Sociais */}
                        <div className="mt-6 flex items-center space-x-4">
                            <a
                                href="https://instagram.com/instituto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transform transition-all duration-300 hover:scale-125 hover:rotate-6"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a
                                href="https://facebook.com/instituto"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transform transition-all duration-300 hover:scale-125 hover:-rotate-6"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Direitos Autorais e Desenvolvedor */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        © {new Date().getFullYear()} Escrituras Interativas. Todos os direitos reservados.
                    </p>
                    <a
                        href="https://github.com/William-Merces"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-2 text-sm text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-all duration-300 group"
                    >
                        <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                        <span className="opacity-70 group-hover:opacity-100">
                            Desenvolvido com ♥ por William Mercês
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}