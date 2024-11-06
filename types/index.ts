// types/index.ts
export interface User {
    id: string
    name: string
    email: string
    preferences?: UserPreferences
  }
  
  export interface UserPreferences {
    bibleVersion: string
    fontSize: number
    theme: 'light' | 'dark' | 'system'
  }
  
  export interface BiblePassage {
    book: string
    chapter: number
    verse: number
    text: string
    version: string
  }
  
  export interface StudyNote {
    id: string
    userId: string
    passage: BiblePassage
    content: string
    createdAt: Date
    updatedAt: Date
  }


  