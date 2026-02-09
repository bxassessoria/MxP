export interface Client {
  name: string;
  logo: string;
  category: string;
  bgImage?: string;
}

export const clientsData: Client[] = [
  // --- Com Backgrounds e Logos Locais ---
  { name: "TV Cultura", logo: "/images/logos/cases/tv-cultura.png", bgImage: "/images/cases/backgrounds/tv-cultura-bg.jpg", category: "TV Pública" },
  { name: "Rádio Cultura Brasil", logo: "/images/logos/cases/rádio-cultura-brasil.png", bgImage: "/images/cases/backgrounds/rádio-cultura-brasil-bg.jpg", category: "Rádio" },
  { name: "EPTV", logo: "/images/logos/cases/eptv.png", bgImage: "/images/cases/backgrounds/eptv-bg.jpg", category: "TV" },
  { name: "TV Centro América", logo: "/images/logos/cases/tv-centro-américa.png", bgImage: "/images/cases/backgrounds/tv-centro-américa-bg.jpg", category: "TV" },
  { name: "TV Tem", logo: "/images/logos/cases/tv-tem.png", bgImage: "/images/cases/backgrounds/tv-tem-bg.jpg", category: "TV" },
  { name: "TV Novo Tempo", logo: "/images/logos/cases/tv-novo-tempo.png", bgImage: "/images/cases/backgrounds/tv-novo-tempo-bg.jpg", category: "Igreja" },
  { name: "TV Morena", logo: "/images/logos/cases/tv-morena.png", bgImage: "/images/cases/backgrounds/tv-morena-bg.jpg", category: "TV" },
  { name: "TV Câmara São Paulo", logo: "/images/logos/cases/tv-câmara-são-paulo.png", bgImage: "/images/cases/backgrounds/tv-câmara-são-paulo-bg.jpg", category: "Órgão Público" },
  { name: "TV Assembleia CE", logo: "/images/logos/cases/tv-assembleia-ce.png", bgImage: "/images/cases/backgrounds/tv-assembleia-ce-bg.jpg", category: "Órgão Público" },
  { name: "TV Serra Dourada", logo: "/images/logos/cases/tv-serra-dourada.png", bgImage: "/images/cases/backgrounds/tv-serra-dourada-bg.jpg", category: "TV" },
  { name: "Traffic Sports", logo: "/images/logos/cases/traffic-sports.png", bgImage: "/images/cases/backgrounds/traffic-sports-bg.jpg", category: "Esportes" },
  { name: "TV Costa Norte", logo: "/images/logos/cases/tv-costa-norte.png", bgImage: "/images/cases/backgrounds/tv-costa-norte-bg.jpg", category: "TV" },
  { name: "TV Câmara SJC", logo: "/images/logos/cases/tv-câmara-sjc.png", bgImage: "/images/cases/backgrounds/tv-câmara-sjc-bg.jpg", category: "Órgão Público" },
  { name: "Instituto Embratel", logo: "/images/logos/cases/instituto-embratel.png", bgImage: "/images/cases/backgrounds/instituto-embratel-bg.jpg", category: "Educação" },
  { name: "Sports+", logo: "/images/logos/cases/sports.png", bgImage: "/images/cases/backgrounds/sports-bg.jpg", category: "Esportes" },
  { name: "Arca Media", logo: "/images/logos/cases/arca-media.png", bgImage: "/images/cases/backgrounds/arca-media-bg.jpg", category: "Igreja" },
  { name: "Igreja Adventista", logo: "/images/logos/cases/igreja-adventista.png", bgImage: "/images/cases/backgrounds/igreja-adventista-bg.jpg", category: "Igreja" },
  { name: "MTV", logo: "/images/logos/cases/mtv.png", bgImage: "/images/cases/backgrounds/mtv-bg.jpg", category: "TV" },
  { name: "TV Rá Tim Bum", logo: "/images/logos/cases/tv-rá-tim-bum.png", bgImage: "/images/cases/backgrounds/tv-rá-tim-bum-bg.jpg", category: "TV Pública" },
  { name: "Embrapa", logo: "/images/logos/cases/embrapa.png", bgImage: "/images/cases/backgrounds/embrapa-bg.jpg", category: "Órgão Público" },

  // --- Demais (Sem BG específico ainda, usarão fallback ou repetição de estilo) ---
  { name: "EPTV Ribeirão Preto", logo: "/images/logos/cases/eptv.png", category: "TV" },
  { name: "DSA", logo: "/images/logos/cases/igreja-adventista.png", category: "Igreja" },
  { name: "Assembleia Legislativa da Bahia", logo: "/images/logos/cases/tv-assembleia-ce.png", category: "Órgão Público" }, // Placeholder logo
  { name: "TV Século 21", logo: "/images/logos/cases/tv-novo-tempo.png", category: "Igreja" }, // Placeholder logo
  { name: "Câmara de São Paulo", logo: "/images/logos/cases/tv-câmara-são-paulo.png", category: "Órgão Público" },
  { name: "Queima Diária", logo: "/images/logos/cases/traffic-sports.png", category: "Outros" }, // Placeholder
  { name: "Sagres – Embratel", logo: "/images/logos/cases/instituto-embratel.png", category: "Educação" },
  { name: "Sesc SP", logo: "/images/logos/cases/tv-cultura.png", category: "Outros" }, // Placeholder
  { name: "Câmara de Joinville", logo: "/images/logos/cases/tv-câmara-sjc.png", category: "Órgão Público" },
  { name: "Câmara do Rio de Janeiro", logo: "/images/logos/cases/tv-câmara-são-paulo.png", category: "Órgão Público" },
  { name: "TV Tribuna Vitória", logo: "/images/logos/cases/tv-tem.png", category: "TV" }, // Placeholder
  { name: "Live Mode", logo: "/images/logos/cases/sports.png", category: "Esportes" },
  { name: "EPTV Campinas", logo: "/images/logos/cases/eptv.png", category: "TV" },
  { name: "Fundação Faculdade de Medicina – USP", logo: "/images/logos/cases/instituto-embratel.png", category: "Educação" }, // Placeholder
  { name: "IURD Curitiba", logo: "/images/logos/cases/arca-media.png", category: "Igreja" }, // Placeholder
  { name: "IURD Belo Horizonte", logo: "/images/logos/cases/arca-media.png", category: "Igreja" }, // Placeholder
  { name: "Assembleia Legislativa do Ceará", logo: "/images/logos/cases/tv-assembleia-ce.png", category: "Órgão Público" },
  { name: "Câmara de Taubaté", logo: "/images/logos/cases/tv-câmara-sjc.png", category: "Órgão Público" },
  { name: "MIS Ceará", logo: "/images/logos/cases/tv-assembleia-ce.png", category: "Órgão Público" },
  { name: "Rádio Itatiaia", logo: "/images/logos/cases/rádio-cultura-brasil.png", category: "Rádio" }, // Placeholder
  { name: "Sistema Penitenciário", logo: "/images/logos/cases/tv-assembleia-ce.png", category: "Órgão Público" },
  { name: "Igreja Messiânica Mundial do Brasil", logo: "/images/logos/cases/igreja-adventista.png", category: "Igreja" }
];
