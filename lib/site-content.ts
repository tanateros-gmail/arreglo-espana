export type PortfolioPiece = {
  title: string;
  year: string;
  mood: string;
  description: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export const portfolioPieces: PortfolioPiece[] = [
  {
    title: "The Black Nave",
    year: "2026",
    mood: "Cathedral portraiture",
    description:
      "A solemn editorial study staged beneath ribbed shadows, where candlelight catches only the edges of lace and stone."
  },
  {
    title: "Raven Key Nocturne",
    year: "2025",
    mood: "Object narrative",
    description:
      "Antique brass, ink-black feathers, and parchment tones arranged like a whispered inventory from a locked library."
  },
  {
    title: "Moon over the Conservatory",
    year: "2025",
    mood: "Atmospheric campaign",
    description:
      "A cinematic product story suspended between midnight blue fog, glasshouse silhouettes, and restrained crimson detail."
  }
];

export const contactItems: ContactItem[] = [
  {
    label: "Studio",
    value: "Arreglo Espana Atelier",
    href: "mailto:atelier@example.com"
  },
  {
    label: "Commissions",
    value: "commissions@example.com",
    href: "mailto:commissions@example.com"
  },
  {
    label: "Moonlit line",
    value: "+34 000 000 000",
    href: "tel:+34000000000"
  }
];

export const futureCmsCollections = [
  "portfolio_pieces",
  "contact_items",
  "hero_settings",
  "site_navigation"
] as const;
