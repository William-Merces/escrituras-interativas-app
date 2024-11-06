// app/_components/learning/apocalypse-data.ts

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'reading' | 'video' | 'quiz' | 'exercise';
  status: 'completed' | 'available' | 'locked';
  xpReward: number;
  motivationalText: string;
  estimatedTime: number;
  difficulty: 1 | 2 | 3;
  principles?: string[];
}

export interface WeeklyLesson {
  id: string;
  weekNumber: number;
  title: string;
  description: string;
  principles: string[];
  chapters: Chapter[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  weeklyLessons: WeeklyLesson[];
}

export const apocalypseCourse: Course = {
  id: 'apocalipse',
  title: "Apocalipse: Visões de Esperança",
  description: "Uma jornada inspiradora através das visões proféticas de João",
  weeklyLessons: [
    // Semana 16
    {
      id: 'week-16',
      weekNumber: 16,
      title: "A Visão do Cristo Glorificado",
      description: "Conheça o Cristo ressuscitado em Sua majestade divina",
      principles: [
        "Jesus Cristo zela e cuida de Seus seguidores fiéis"
      ],
      chapters: [
        {
          id: 'cap1-1',
          title: "O Testemunho de João",
          description: "A origem divina da revelação",
          icon: "📜",
          type: "reading",
          status: "available",
          xpReward: 50,
          motivationalText: "Descubra como João recebeu uma das mais extraordinárias revelações da história!",
          estimatedTime: 15,
          difficulty: 1
        },
        {
          id: 'cap1-2',
          title: "O Dia do Senhor",
          description: "João recebe a visão em Patmos",
          icon: "🏝️",
          type: "video",
          status: "available",
          xpReward: 75,
          motivationalText: "Viaje até a ilha de Patmos e reviva o momento em que o céu se abriu!",
          estimatedTime: 20,
          difficulty: 1
        },
        {
          id: 'cap1-3',
          title: "O Filho do Homem",
          description: "A majestosa aparição de Cristo",
          icon: "👑",
          type: "exercise",
          status: "locked",
          xpReward: 100,
          motivationalText: "Contemple o Salvador em toda Sua glória celestial!",
          estimatedTime: 25,
          difficulty: 2
        }
      ]
    },

    // Semana 17
    {
      id: 'week-17',
      weekNumber: 17,
      title: "Mensagens às Sete Igrejas",
      description: "Conselhos divinos para as igrejas da Ásia",
      principles: [
        "O Senhor conhece cada um de nós",
        "Ele nos corrige porque nos ama"
      ],
      chapters: [
        {
          id: 'cap2-1',
          title: "Igreja de Éfeso",
          description: "A igreja do primeiro amor",
          icon: "🕯️",
          type: "reading",
          status: "locked",
          xpReward: 75,
          motivationalText: "Aprenda como manter vivo seu primeiro amor pelo evangelho!",
          estimatedTime: 20,
          difficulty: 2
        },
        {
          id: 'cap2-2',
          title: "Igreja de Esmirna",
          description: "A igreja da perseguição",
          icon: "⚔️",
          type: "quiz",
          status: "locked",
          xpReward: 75,
          motivationalText: "Descubra como permanecer fiel mesmo nas maiores adversidades!",
          estimatedTime: 20,
          difficulty: 2
        },
        {
          id: 'cap2-3',
          title: "Igreja de Pérgamo",
          description: "A igreja da doutrina verdadeira",
          icon: "📚",
          type: "exercise",
          status: "locked",
          xpReward: 85,
          motivationalText: "Entenda a importância de se manter fiel à verdadeira doutrina!",
          estimatedTime: 25,
          difficulty: 2
        }
      ]
    },

// Continuação do array weeklyLessons...

    // Semana 18
    {
      id: 'week-18',
      weekNumber: 18,
      title: "O Trono Celestial",
      description: "Uma visão do centro do universo",
      principles: [
        "Reconhecer a grandeza do Pai Celestial nos leva a adorá-Lo"
      ],
      chapters: [
        {
          id: 'cap4-1',
          title: "A Porta Aberta",
          description: "João é convidado ao céu",
          icon: "🚪",
          type: "reading",
          status: "locked",
          xpReward: 80,
          motivationalText: "Entre pela porta celestial e contemple as maravilhas do céu!",
          estimatedTime: 20,
          difficulty: 2
        },
        {
          id: 'cap4-2',
          title: "O Trono de Deus",
          description: "A majestade do Pai Celestial",
          icon: "👑",
          type: "video",
          status: "locked",
          xpReward: 90,
          motivationalText: "Vislumbre a glória do trono do Altíssimo!",
          estimatedTime: 25,
          difficulty: 3
        },
        {
          id: 'cap4-3',
          title: "Os 24 Anciãos",
          description: "Os líderes celestiais",
          icon: "👴",
          type: "exercise",
          status: "locked",
          xpReward: 85,
          motivationalText: "Conheça aqueles que lideram a adoração celestial!",
          estimatedTime: 22,
          difficulty: 2
        }
      ]
    },

    // Semana 19
    {
      id: 'week-19',
      weekNumber: 19,
      title: "O Cordeiro e o Livro Selado",
      description: "A única pessoa digna de abrir os selos",
      principles: [
        "Jesus Cristo é o único ser digno e capaz de nos redimir"
      ],
      chapters: [
        {
          id: 'cap5-1',
          title: "O Livro Selado",
          description: "O mistério dos sete selos",
          icon: "📖",
          type: "reading",
          status: "locked",
          xpReward: 85,
          motivationalText: "Descubra o significado do livro que ninguém podia abrir!",
          estimatedTime: 20,
          difficulty: 2
        },
        {
          id: 'cap5-2',
          title: "O Cordeiro Imolado",
          description: "Cristo, digno de abrir os selos",
          icon: "🐑",
          type: "video",
          status: "locked",
          xpReward: 95,
          motivationalText: "Entenda por que apenas Cristo é digno de revelar os mistérios de Deus!",
          estimatedTime: 25,
          difficulty: 3
        },
        {
          id: 'cap5-3',
          title: "O Cântico Novo",
          description: "A adoração universal a Cristo",
          icon: "🎵",
          type: "exercise",
          status: "locked",
          xpReward: 90,
          motivationalText: "Junte-se ao coro celestial em louvor ao Cordeiro!",
          estimatedTime: 22,
          difficulty: 2
        }
      ]
    },

    // Semana 20
    {
      id: 'week-20',
      weekNumber: 20,
      title: "Os Selos e os Salvos",
      description: "Revelações sobre tribulações e triunfos",
      principles: [
        "Se formos fiéis nas tribulações, desfrutaremos da glória celestial"
      ],
      chapters: [
        {
          id: 'cap6-1',
          title: "Os Quatro Cavaleiros",
          description: "Símbolos de conquista e tribulação",
          icon: "🐎",
          type: "reading",
          status: "locked",
          xpReward: 100,
          motivationalText: "Desvende o significado dos misteriosos cavaleiros do Apocalipse!",
          estimatedTime: 30,
          difficulty: 3
        },
        {
          id: 'cap6-2',
          title: "O Quinto e Sexto Selos",
          description: "Mártires e sinais celestiais",
          icon: "⭐",
          type: "quiz",
          status: "locked",
          xpReward: 95,
          motivationalText: "Aprenda sobre o sacrifício dos fiéis e os sinais dos últimos dias!",
          estimatedTime: 25,
          difficulty: 3
        },
        {
          id: 'cap7-1',
          title: "Os 144.000 Selados",
          description: "Os servos fiéis de Deus",
          icon: "✅",
          type: "video",
          status: "locked",
          xpReward: 90,
          motivationalText: "Descubra quem são os escolhidos que receberão o selo de Deus!",
          estimatedTime: 25,
          difficulty: 2
        }
      ]
    },

// Semana 21
{
  id: 'week-21',
  weekNumber: 21,
  title: "As Trombetas do Juízo",
  description: "Advertências divinas para a humanidade",
  principles: [
    "Os julgamentos do Senhor recairão sobre os iníquos que não se arrependerem"
  ],
  chapters: [
    {
      id: 'cap8-1',
      title: "O Sétimo Selo",
      description: "O silêncio no céu",
      icon: "🤫",
      type: "reading",
      status: "locked",
      xpReward: 85,
      motivationalText: "Experimente o momento solene do silêncio celestial!",
      estimatedTime: 20,
      difficulty: 2
    },
    {
      id: 'cap8-2',
      title: "As Quatro Primeiras Trombetas",
      description: "Juízos sobre a natureza",
      icon: "🎺",
      type: "video",
      status: "locked",
      xpReward: 95,
      motivationalText: "Compreenda as advertências divinas através dos elementos naturais!",
      estimatedTime: 25,
      difficulty: 3
    },
    {
      id: 'cap9-1',
      title: "Quinta e Sexta Trombetas",
      description: "Aflições sobre a humanidade",
      icon: "⚠️",
      type: "exercise",
      status: "locked",
      xpReward: 100,
      motivationalText: "Entenda as consequências da rejeição às advertências divinas!",
      estimatedTime: 30,
      difficulty: 3
    }
  ]
},

// Semana 22
{
  id: 'week-22',
  weekNumber: 22,
  title: "O Livro e as Testemunhas",
  description: "Revelações sobre a missão profética",
  principles: [
    "A verdade triunfará através do poder do Cordeiro"
  ],
  chapters: [
    {
      id: 'cap10-1',
      title: "O Anjo e o Livrinho",
      description: "Uma nova missão profética",
      icon: "📗",
      type: "reading",
      status: "locked",
      xpReward: 85,
      motivationalText: "Descubra o significado do livrinho doce como mel!",
      estimatedTime: 20,
      difficulty: 2
    },
    {
      id: 'cap10-2',
      title: "A Missão de João",
      description: "O chamado para profetizar",
      icon: "📢",
      type: "video",
      status: "locked",
      xpReward: 90,
      motivationalText: "Entenda sua própria missão de compartilhar a verdade!",
      estimatedTime: 25,
      difficulty: 2
    },
    {
      id: 'cap11-1',
      title: "As Duas Testemunhas",
      description: "O poder do testemunho",
      icon: "👥",
      type: "exercise",
      status: "locked",
      xpReward: 95,
      motivationalText: "Aprenda sobre o poder invencível da palavra de Deus!",
      estimatedTime: 25,
      difficulty: 3
    }
  ]
},

// Semana 23
{
  id: 'week-23',
  weekNumber: 23,
  title: "O Grande Conflito",
  description: "A batalha cósmica entre o bem e o mal",
  principles: [
    "Podemos vencer Satanás através da Expiação de Cristo",
    "Deus restaurou o evangelho nos últimos dias"
  ],
  chapters: [
    {
      id: 'cap12-1',
      title: "A Mulher e o Dragão",
      description: "O ataque à igreja de Cristo",
      icon: "🐉",
      type: "reading",
      status: "locked",
      xpReward: 100,
      motivationalText: "Desvende os símbolos da grande batalha espiritual!",
      estimatedTime: 30,
      difficulty: 3
    },
    {
      id: 'cap12-2',
      title: "A Guerra no Céu",
      description: "A origem do conflito",
      icon: "⚔️",
      type: "video",
      status: "locked",
      xpReward: 95,
      motivationalText: "Compreenda como começou a batalha entre bem e mal!",
      estimatedTime: 25,
      difficulty: 3
    },
    {
      id: 'cap13-1',
      title: "As Bestas",
      description: "Poderes que se opõem a Deus",
      icon: "🦁",
      type: "exercise",
      status: "locked",
      xpReward: 100,
      motivationalText: "Identifique as forças que se opõem ao reino de Deus!",
      estimatedTime: 30,
      difficulty: 3
    }
  ]
},

// Semana 24
{
  id: 'week-24',
  weekNumber: 24,
  title: "Os Últimos Flagelos",
  description: "Juízos finais e preparação",
  principles: [
    "Devemos estar espiritualmente preparados para a volta de Cristo"
  ],
  chapters: [
    {
      id: 'cap15-1',
      title: "O Cântico da Vitória",
      description: "Os vencedores celebram",
      icon: "🎵",
      type: "reading",
      status: "locked",
      xpReward: 85,
      motivationalText: "Junte-se ao coro dos que venceram a besta!",
      estimatedTime: 20,
      difficulty: 2
    },
    {
      id: 'cap16-1',
      title: "As Sete Pragas",
      description: "Os juízos finais",
      icon: "⚡",
      type: "video",
      status: "locked",
      xpReward: 95,
      motivationalText: "Entenda os eventos finais antes da volta de Cristo!",
      estimatedTime: 25,
      difficulty: 3
    },
    {
      id: 'cap16-2',
      title: "Preparação Final",
      description: "O chamado para vigilância",
      icon: "⏰",
      type: "exercise",
      status: "locked",
      xpReward: 90,
      motivationalText: "Aprenda como se manter vigilante nos últimos dias!",
      estimatedTime: 25,
      difficulty: 2
    }
  ]
},


{
  id: 'week-25',
  weekNumber: 25,
  title: "A Queda de Babilônia",
  description: "O fim dos sistemas opostos a Deus",
  principles: [
    "Jesus Cristo vencerá a iniquidade do mundo",
    "Devemos nos apartar da iniquidade"
  ],
  chapters: [
    {
      id: 'cap17-1',
      title: "A Grande Meretriz",
      description: "Sistemas de falsa adoração",
      icon: "👑",
      type: "reading",
      status: "locked",
      xpReward: 95,
      motivationalText: "Compreenda os perigos dos sistemas falsos de adoração!",
      estimatedTime: 25,
      difficulty: 3
    },
    {
      id: 'cap17-2',
      title: "O Mistério Revelado",
      description: "Interpretação da visão",
      icon: "🔍",
      type: "video",
      status: "locked",
      xpReward: 90,
      motivationalText: "Desvende os símbolos que revelam a verdade sobre Babilônia!",
      estimatedTime: 25,
      difficulty: 2
    },
    {
      id: 'cap18-1',
      title: "A Queda Anunciada",
      description: "O fim dos sistemas mundanos",
      icon: "🏛️",
      type: "exercise",
      status: "locked",
      xpReward: 100,
      motivationalText: "Veja como os sistemas opostos a Deus chegam ao fim!",
      estimatedTime: 30,
      difficulty: 3
    }
  ]
},

// Semana 26-28 (Semanas Finais)
{
  id: 'week-26-28',
  weekNumber: 26,
  title: "A Nova Criação",
  description: "O grandioso final: um novo céu e uma nova terra",
  principles: [
    "No Reino Celestial não haverá mais morte nem tristeza",
    "A obediência nos garantirá todas as bênçãos prometidas"
  ],
  chapters: [
    {
      id: 'cap19-1',
      title: "O Retorno do Rei",
      description: "A volta gloriosa de Cristo",
      icon: "👑",
      type: "reading",
      status: "locked",
      xpReward: 100,
      motivationalText: "Prepare-se para o momento mais grandioso da história!",
      estimatedTime: 30,
      difficulty: 3
    },
    {
      id: 'cap20-1',
      title: "O Milênio",
      description: "O reino de mil anos",
      icon: "🌟",
      type: "video",
      status: "locked",
      xpReward: 95,
      motivationalText: "Vislumbre como será o período de paz com Cristo!",
      estimatedTime: 25,
      difficulty: 2
    },
    {
      id: 'cap21-1',
      title: "A Nova Jerusalém",
      description: "A cidade celestial",
      icon: "🏰",
      type: "exercise",
      status: "locked",
      xpReward: 90,
      motivationalText: "Explore a majestosa capital do reino eterno!",
      estimatedTime: 25,
      difficulty: 2
    },
    {
      id: 'cap22-1',
      title: "O Grande Final",
      description: "O convite final de Deus",
      icon: "✨",
      type: "quiz",
      status: "locked",
      xpReward: 100,
      motivationalText: "Aceite o convite para a vida eterna!",
      estimatedTime: 30,
      difficulty: 3
    }
  ]
}
]
};

export default apocalypseCourse;

