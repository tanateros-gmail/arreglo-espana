export const locales = ["es", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export type PortfolioPiece = {
  title: string;
  year: string;
  mood: string;
  description: string;
  imageUrl?: string;
  imageAlt: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type NavigationItem = {
  id: "atelier" | "works" | "ritual" | "contact";
  label: string;
};

export type SiteContent = {
  locale: Locale;
  localeName: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  navigation: NavigationItem[];
  brandAria: string;
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
  };
  featureCard: {
    aria: string;
    kicker: string;
    title: string;
    body: string;
  };
  atelier: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  works: {
    eyebrow: string;
    title: string;
    items: PortfolioPiece[];
  };
  ritual: {
    emblem: string;
    eyebrow: string;
    title: string;
    body: string;
    cmsLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    items: ContactItem[];
  };
};

export const localeLabels: Record<Locale, string> = {
  es: "Español",
  en: "English",
  ru: "Русский"
};

export const defaultLocale: Locale = "es";

export const futureCmsCollections = [
  "site_snapshots",
  "portfolio_pieces",
  "contact_items",
  "hero_settings",
  "site_navigation"
] as const;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "https://arreglo-espana.vercel.app";
}

export function getLocalizedPath(locale: Locale, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function getFallbackContent(locale: Locale): SiteContent {
  return fallbackContent[locale];
}

const sharedWorks: Record<Locale, PortfolioPiece[]> = {
  es: [
    {
      title: "La nave negra",
      year: "2026",
      mood: "Retrato catedralicio",
      imageAlt: "Silueta editorial bajo arcos victorianos y luz de vela",
      description:
        "Una serie editorial solemne bajo sombras nervadas, donde el terciopelo negro, la piel pálida y la vela rozan apenas los bordes del encaje y la piedra."
    },
    {
      title: "Nocturno de llave y cuervo",
      year: "2026",
      mood: "Narrativa de objeto",
      imageAlt: "Llave antigua, plumas negras y pergamino envejecido",
      description:
        "Latón antiguo, plumas de tinta y tonos de pergamino ordenados como un inventario susurrado desde una biblioteca cerrada durante una tormenta."
    },
    {
      title: "Luna sobre el conservatorio",
      year: "2025",
      mood: "Campaña atmosférica",
      imageAlt: "Luna azul medianoche sobre un invernadero velado por niebla",
      description:
        "Una historia visual suspendida entre niebla azul medianoche, siluetas de vidrio, flores marchitas y detalles carmesí contenidos."
    },
    {
      title: "El gabinete de los retratos mudos",
      year: "2025",
      mood: "Dirección de arte",
      imageAlt: "Retratos antiguos dentro de marcos dorados y sombras granate",
      description:
        "Composición de retratos, marcos agrietados y cortinas pesadas para una marca que quería lujo oscuro sin caer en caricatura de Halloween."
    },
    {
      title: "Cartas desde el cementerio de lluvia",
      year: "2024",
      mood: "Editorial poética",
      imageAlt: "Cartas manuscritas sobre piedra húmeda con hojas oscuras",
      description:
        "Papeles húmedos, tinta corrida y mármol frío construyen una pequeña elegía visual para perfumes, joyería y piezas de autor."
    },
    {
      title: "La sala de las trece velas",
      year: "2024",
      mood: "Escenografía íntima",
      imageAlt: "Mesa de madera con trece velas, copa roja y sombra de cruz ornamental",
      description:
        "Un set íntimo de madera vieja, reflejos de vino, cera derretida y sombras largas pensado para campañas nocturnas y lanzamientos boutique."
    }
  ],
  en: [
    {
      title: "The Black Nave",
      year: "2026",
      mood: "Cathedral portraiture",
      imageAlt: "Editorial silhouette beneath Victorian arches and candlelight",
      description:
        "A solemn editorial series beneath ribbed shadows, where black velvet, pale skin, and candlelight catch only the edges of lace and stone."
    },
    {
      title: "Raven Key Nocturne",
      year: "2026",
      mood: "Object narrative",
      imageAlt: "Antique key, black feathers, and aged parchment",
      description:
        "Antique brass, ink-black feathers, and parchment tones arranged like a whispered inventory from a locked library during a storm."
    },
    {
      title: "Moon over the Conservatory",
      year: "2025",
      mood: "Atmospheric campaign",
      imageAlt: "Midnight-blue moon above a fog-veiled conservatory",
      description:
        "A cinematic product story suspended between midnight-blue fog, glasshouse silhouettes, wilted flowers, and restrained crimson detail."
    },
    {
      title: "The Cabinet of Silent Portraits",
      year: "2025",
      mood: "Art direction",
      imageAlt: "Antique portraits in gold frames with deep burgundy shadows",
      description:
        "Portraits, cracked frames, and heavy curtains composed for a brand that wanted dark luxury without becoming Halloween pastiche."
    },
    {
      title: "Letters from the Rain Cemetery",
      year: "2024",
      mood: "Poetic editorial",
      imageAlt: "Handwritten letters on wet stone with dark leaves",
      description:
        "Damp paper, bleeding ink, and cold marble form a small visual elegy for perfume, jewelry, and independent objects."
    },
    {
      title: "The Room of Thirteen Candles",
      year: "2024",
      mood: "Intimate scenography",
      imageAlt: "Wooden table with thirteen candles, red glass, and an ornate cross shadow",
      description:
        "An intimate set of old wood, wine reflections, melted wax, and long shadows designed for nocturnal campaigns and boutique launches."
    }
  ],
  ru: [
    {
      title: "Черный неф",
      year: "2026",
      mood: "Кафедральный портрет",
      imageAlt: "Редакционный силуэт под викторианскими арками и свечным светом",
      description:
        "Сдержанная редакционная серия в ребристых тенях, где черный бархат, бледная кожа и свеча касаются только края кружева и камня."
    },
    {
      title: "Ноктюрн ключа и ворона",
      year: "2026",
      mood: "Предметная история",
      imageAlt: "Старинный ключ, черные перья и состаренный пергамент",
      description:
        "Старая латунь, чернильные перья и пергаментные тона собраны как шепот инвентарной книги из закрытой библиотеки во время грозы."
    },
    {
      title: "Луна над оранжереей",
      year: "2025",
      mood: "Атмосферная кампания",
      imageAlt: "Полуночно-синяя луна над оранжереей в тумане",
      description:
        "Кинематографичная история между полуночно-синим туманом, стеклянными силуэтами, увядшими цветами и сдержанным карминовым акцентом."
    },
    {
      title: "Кабинет молчаливых портретов",
      year: "2025",
      mood: "Арт-дирекшн",
      imageAlt: "Старинные портреты в золотых рамах и глубоких бордовых тенях",
      description:
        "Портреты, потрескавшиеся рамы и тяжелые шторы для бренда, которому нужна темная роскошь без хэллоуинской театральности."
    },
    {
      title: "Письма с дождливого кладбища",
      year: "2024",
      mood: "Поэтический editorial",
      imageAlt: "Рукописные письма на мокром камне с темными листьями",
      description:
        "Влажная бумага, расплывающиеся чернила и холодный мрамор складываются в маленькую визуальную элегию для парфюма, украшений и авторских объектов."
    },
    {
      title: "Комната тринадцати свечей",
      year: "2024",
      mood: "Интимная сценография",
      imageAlt: "Деревянный стол с тринадцатью свечами, красным бокалом и тенью орнаментального креста",
      description:
        "Интимный сет из старого дерева, винных отражений, расплавленного воска и длинных теней для ночных кампаний и бутиковых запусков."
    }
  ]
};

const fallbackContent: Record<Locale, SiteContent> = {
  es: {
    locale: "es",
    localeName: localeLabels.es,
    metadata: {
      title: "Arreglo España | Atelier gótico cinematográfico",
      description:
        "Portafolio gótico oscuro para editoriales, campañas visuales y encargos atmosféricos con estética victoriana, niebla y luz de vela.",
      keywords: [
        "atelier gótico",
        "fotografía atmosférica",
        "portafolio visual",
        "estética victoriana",
        "campañas cinematográficas"
      ],
      ogTitle: "Arreglo España | Atelier gótico cinematográfico",
      ogDescription:
        "Elegancia oscura, arquitectura victoriana, bibliotecas polvorientas y poesía bajo la luna."
    },
    navigation: [
      { id: "atelier", label: "Atelier" },
      { id: "works", label: "Obras" },
      { id: "ritual", label: "CMS" },
      { id: "contact", label: "Contacto" }
    ],
    brandAria: "Inicio de Arreglo España",
    hero: {
      eyebrow: "Atelier visual bajo la luna",
      title: "Donde la oscuridad de terciopelo guarda sus votos.",
      lede:
        "Un portafolio gótico cinematográfico para editoriales melancólicas, relatos de objetos y encargos atmosféricos moldeados por sombra de catedral, luz de pergamino y paciencia de biblioteca antigua.",
      primaryCta: "Ver obras",
      secondaryCta: "Solicitar encargo"
    },
    featureCard: {
      aria: "Atmósfera destacada",
      kicker: "En la nave de la noche",
      title: "Silencio catedralicio, aliento carmesí, una llave girando despacio.",
      body:
        "Negros profundos, destellos rojo sangre, contraste de pergamino y bruma azul medianoche componen una inquietud elegante y contenida."
    },
    atelier: {
      eyebrow: "El atelier",
      title: "Diseñado como un pasaje susurrado entre piedra.",
      paragraphs: [
        "La composición deja espacio para el silencio: columnas asimétricas, sombras largas y ritmo deliberado.",
        "Cada hover avanza con lentitud ceremonial, entre parpadeo de vela y transición de susurro que vive en la periferia."
      ]
    },
    works: {
      eyebrow: "Obras seleccionadas",
      title: "Un gabinete de estudios atmosféricos.",
      items: sharedWorks.es
    },
    ritual: {
      emblem: "Ruta CMS",
      eyebrow: "Siguiente ritual",
      title: "Listo para una sala de administración con Supabase.",
      body:
        "El contenido se puede cargar desde Supabase cuando el proyecto tenga URL, publishable key y service role key. Mientras tanto se muestra un fallback tipado.",
      cmsLabel: "Colecciones CMS previstas"
    },
    contact: {
      eyebrow: "Contacto",
      title: "Envía una nota bajo la luna de hierro.",
      items: [
        {
          label: "Estudio",
          value: "Calle de la Luna 13, Madrid",
          href: "https://maps.google.com/?q=Calle+de+la+Luna+13+Madrid"
        },
        {
          label: "Encargos editoriales",
          value: "atelier@arreglo-espana.example",
          href: "mailto:atelier@arreglo-espana.example"
        },
        {
          label: "Ritual de consulta",
          value: "Sesiones nocturnas, dirección de arte y campañas boutique",
          href: "mailto:atelier@arreglo-espana.example?subject=Consulta%20g%C3%B3tica"
        },
        { label: "Línea nocturna", value: "+34 611 013 013", href: "tel:+34611013013" }
      ]
    }
  },
  en: {
    locale: "en",
    localeName: localeLabels.en,
    metadata: {
      title: "Arreglo Espana | Cinematic Gothic Atelier",
      description:
        "A dark gothic portfolio for editorial visuals, atmospheric campaigns, and cinematic commissions shaped by Victorian shadows.",
      keywords: [
        "gothic atelier",
        "atmospheric photography",
        "visual portfolio",
        "Victorian aesthetic",
        "cinematic campaigns"
      ],
      ogTitle: "Arreglo Espana | Cinematic Gothic Atelier",
      ogDescription:
        "Elegant darkness, Victorian architecture, dusty libraries, and poetry beneath the moon."
    },
    navigation: [
      { id: "atelier", label: "Atelier" },
      { id: "works", label: "Works" },
      { id: "ritual", label: "CMS" },
      { id: "contact", label: "Contact" }
    ],
    brandAria: "Arreglo Espana home",
    hero: {
      eyebrow: "Moonlit visual atelier",
      title: "Where velvet darkness keeps its quiet vows.",
      lede:
        "A cinematic gothic portfolio for melancholic editorials, object stories, and atmospheric commissions shaped by cathedral shadow, parchment light, and the patience of old libraries.",
      primaryCta: "View the works",
      secondaryCta: "Request a commission"
    },
    featureCard: {
      aria: "Featured atmosphere",
      kicker: "In the nave of night",
      title: "Cathedral hush, crimson breath, a key turning slowly.",
      body:
        "Deep blacks, blood-red glimmers, aged parchment contrast, and midnight-blue haze compose a restrained world of elegant unease."
    },
    atelier: {
      eyebrow: "The atelier",
      title: "Designed like a whispered passage through stone.",
      paragraphs: [
        "The composition leaves room for silence: asymmetric columns, long shadows, and deliberate pacing.",
        "Every hover is slow and ceremonial, with candle-flicker warmth and fading whisper transitions that make the interface feel alive in the periphery."
      ]
    },
    works: {
      eyebrow: "Selected works",
      title: "A cabinet of atmospheric studies.",
      items: sharedWorks.en
    },
    ritual: {
      emblem: "CMS path",
      eyebrow: "Next ritual",
      title: "Ready for a Supabase-backed admin room.",
      body:
        "Content can be loaded from Supabase when the project has a URL, publishable key, and service role key. Until then, the site renders typed fallback content.",
      cmsLabel: "Planned CMS collections"
    },
    contact: {
      eyebrow: "Contact",
      title: "Send a note beneath the iron moon.",
      items: [
        {
          label: "Studio",
          value: "13 Calle de la Luna, Madrid",
          href: "https://maps.google.com/?q=Calle+de+la+Luna+13+Madrid"
        },
        {
          label: "Editorial commissions",
          value: "atelier@arreglo-espana.example",
          href: "mailto:atelier@arreglo-espana.example"
        },
        {
          label: "Consultation ritual",
          value: "Night sessions, art direction, and boutique campaigns",
          href: "mailto:atelier@arreglo-espana.example?subject=Gothic%20consultation"
        },
        { label: "Moonlit line", value: "+34 611 013 013", href: "tel:+34611013013" }
      ]
    }
  },
  ru: {
    locale: "ru",
    localeName: localeLabels.ru,
    metadata: {
      title: "Arreglo Espana | Кинематографичный готический ателье",
      description:
        "Темный готический сайт-портфолио для атмосферных съемок, визуальных кампаний и поэтичных проектов с викторианским настроением.",
      keywords: [
        "готическое ателье",
        "атмосферная фотография",
        "визуальное портфолио",
        "викторианская эстетика",
        "кинематографичные кампании"
      ],
      ogTitle: "Arreglo Espana | Кинематографичный готический ателье",
      ogDescription:
        "Элегантная темнота, викторианская архитектура, пыльные библиотеки и поэзия под луной."
    },
    navigation: [
      { id: "atelier", label: "Ателье" },
      { id: "works", label: "Работы" },
      { id: "ritual", label: "CMS" },
      { id: "contact", label: "Контакты" }
    ],
    brandAria: "Главная Arreglo Espana",
    hero: {
      eyebrow: "Визуальное ателье под луной",
      title: "Где бархатная тьма хранит тихие клятвы.",
      lede:
        "Кинематографичное готическое портфолио для меланхоличных редакционных съемок, предметных историй и атмосферных заказов, собранных из кафедральной тени, пергаментного света и терпения старых библиотек.",
      primaryCta: "Смотреть работы",
      secondaryCta: "Обсудить заказ"
    },
    featureCard: {
      aria: "Главная атмосфера",
      kicker: "В нефе ночи",
      title: "Кафедральная тишина, карминовое дыхание, ключ медленно поворачивается.",
      body:
        "Глубокий черный, отблески крови, состаренный пергамент и полуночно-синяя дымка создают сдержанный мир элегантной тревоги."
    },
    atelier: {
      eyebrow: "Ателье",
      title: "Сделано как шепчущий проход сквозь камень.",
      paragraphs: [
        "Композиция оставляет место тишине: асимметричные колонны, длинные тени и намеренно медленный ритм.",
        "Каждое наведение движется церемониально: мерцание свечи и исчезающий шепот оживляют край зрения."
      ]
    },
    works: {
      eyebrow: "Избранные работы",
      title: "Кабинет атмосферных этюдов.",
      items: sharedWorks.ru
    },
    ritual: {
      emblem: "Путь CMS",
      eyebrow: "Следующий ритуал",
      title: "Готово к админке на Supabase.",
      body:
        "Контент сможет подтягиваться из Supabase после добавления URL проекта, publishable key и service role key. Пока сайт показывает типизированный fallback.",
      cmsLabel: "Планируемые CMS-коллекции"
    },
    contact: {
      eyebrow: "Контакты",
      title: "Отправьте записку под железной луной.",
      items: [
        {
          label: "Студия",
          value: "Calle de la Luna 13, Мадрид",
          href: "https://maps.google.com/?q=Calle+de+la+Luna+13+Madrid"
        },
        {
          label: "Редакционные заказы",
          value: "atelier@arreglo-espana.example",
          href: "mailto:atelier@arreglo-espana.example"
        },
        {
          label: "Консультационный ритуал",
          value: "Ночные съемки, арт-дирекшн и бутиковые кампании",
          href: "mailto:atelier@arreglo-espana.example?subject=Gothic%20consultation"
        },
        { label: "Ночная линия", value: "+34 611 013 013", href: "tel:+34611013013" }
      ]
    }
  }
};
