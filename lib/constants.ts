// lib/constants.ts
export const APP_CONFIG = {
    name: 'Escrituras Interativas',
    description: 'Plataforma moderna de estudo bíblico',
    version: '0.1.0',
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    },
    routes: {
      home: '/',
      auth: {
        login: '/auth/login',
        register: '/auth/register',
      },
    },
  }
  
  export const BIBLE_CONFIG = {
    versions: ['ARA', 'NVI', 'ACF'],
    defaultVersion: 'ARA',
  }