export interface Client {
  name: string;
  logo: string;
  category: string;
}

export const clientsData: Client[] = [
  // --- Originais (Mantidos com URLs de imagem originais) ---
  { name: "TV Cultura", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-01.jpg", category: "TV Pública" },
  { name: "Rádio Cultura Brasil", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-18.jpg", category: "Rádio" },
  { name: "EPTV", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/EPTV_ok.jpg", category: "TV" },
  { name: "TV Centro América", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/centro-pb.jpg", category: "TV" },
  { name: "TV Tem", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-06.jpg", category: "TV" },
  { name: "TV Novo Tempo", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-03_c.jpg", category: "Igreja" },
  { name: "TV Morena", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/morena-pb.jpg", category: "TV" },
  { name: "TV Câmara São Paulo", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/saopaulo_case.jpg", category: "Órgão Público" },
  { name: "TV Assembleia CE", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/TVALCEBW.png", category: "Órgão Público" },
  { name: "TV Serra Dourada", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-04.jpg", category: "TV" },
  { name: "Traffic Sports", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/traffic-sports.jpg", category: "Esportes" },
  { name: "TV Costa Norte", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/costa-norte2.png", category: "TV" },
  { name: "TV Câmara SJC", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/saojose.jpg", category: "Órgão Público" },
  { name: "Instituto Embratel", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/instituto-embratel.jpg", category: "Educação" },
  { name: "Sports+", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-24.jpg", category: "Esportes" },
  { name: "Arca Media", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logo-arca-media.jpg", category: "Igreja" },
  { name: "Igreja Adventista", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-21.jpg", category: "Igreja" },
  { name: "MTV", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-27.jpg", category: "TV" },
  { name: "TV Rá Tim Bum", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-22.jpg", category: "TV Pública" },
  { name: "Embrapa", logo: "https://mediaportal.com.br/novo/wp-content/uploads/2023/01/logos-clientes-19.jpg", category: "Órgão Público" },

  // --- Novos Adicionados (Usando Clearbit ou Placeholder para logos) ---
  { name: "EPTV Ribeirão Preto", logo: "/images/logos/eptv.png", category: "TV" },
  { name: "DSA", logo: "/images/logos/dsa.png", category: "Igreja" },
  { name: "Assembleia Legislativa da Bahia", logo: "/images/logos/alba.png", category: "Órgão Público" },
  { name: "TV Século 21", logo: "/images/logos/seculo21.png", category: "Igreja" },
  { name: "Câmara de São Paulo", logo: "/images/logos/camara-sp.png", category: "Órgão Público" },
  { name: "Queima Diária", logo: "/images/logos/queima-diaria.png", category: "Outros" },
  { name: "Sagres – Embratel", logo: "/images/logos/embratel.png", category: "Educação" },
  { name: "Sesc SP", logo: "/images/logos/sesc.png", category: "Outros" },
  { name: "Câmara de Joinville", logo: "/images/logos/camara-joinville.png", category: "Órgão Público" },
  { name: "Câmara do Rio de Janeiro", logo: "/images/logos/camara-rio.png", category: "Órgão Público" },
  { name: "TV Tribuna Vitória", logo: "/images/logos/tv-tribuna.png", category: "TV" },
  { name: "Live Mode", logo: "/images/logos/livemode.png", category: "Esportes" },
  { name: "EPTV Campinas", logo: "/images/logos/eptv.png", category: "TV" },
  { name: "Fundação Faculdade de Medicina – USP", logo: "/images/logos/ffm-usp.png", category: "Educação" },
  { name: "IURD Curitiba", logo: "/images/logos/iurd.png", category: "Igreja" },
  { name: "IURD Belo Horizonte", logo: "/images/logos/iurd.png", category: "Igreja" },
  { name: "Assembleia Legislativa do Ceará", logo: "/images/logos/alce.png", category: "Órgão Público" },
  { name: "Câmara de Taubaté", logo: "/images/logos/camara-taubate.png", category: "Órgão Público" },
  { name: "MIS Ceará", logo: "/images/logos/mis-ceara.png", category: "Órgão Público" },
  { name: "Rádio Itatiaia", logo: "/images/logos/radio-itatiaia.png", category: "Rádio" },
  { name: "Sistema Penitenciário", logo: "/images/logos/sistema-penitenciario.png", category: "Órgão Público" },
  { name: "Igreja Messiânica Mundial do Brasil", logo: "/images/logos/immb.png", category: "Igreja" }
];
