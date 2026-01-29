export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "regulamentacao-anatel-tv-3-0",
    title: "Regulamentação da Anatel abre caminho para implantação da TV 3.0 no Brasil",
    excerpt: "Publicação da nova resolução no Diário Oficial destina parte da faixa de 300 MHz à radiodifusão, avançando na transição para a nova tecnologia de TV aberta.",
    content: `
      <p>A Agência Nacional de Telecomunicações (Anatel) publicou uma nova resolução que marca um passo decisivo para a implantação da TV 3.0 no Brasil. A medida destina parte da faixa de 300 MHz para serviços de radiodifusão, permitindo os testes e a futura operação da nova geração de televisão aberta no país.</p>
      
      <h2>O que muda com a TV 3.0?</h2>
      <p>A TV 3.0 promete revolucionar a experiência do telespectador, trazendo qualidade de imagem em 4K e até 8K, som imersivo e, principalmente, interatividade total com a internet. Diferente do padrão atual, a nova tecnologia será baseada em IP (Internet Protocol), o que facilita a integração com serviços de streaming e aplicativos.</p>

      <h2>Impacto para as Emissoras</h2>
      <p>Para as emissoras, a mudança exige atualização tecnológica, mas abre portas para novos modelos de negócios, como publicidade direcionada e personalização de conteúdo. A Media Portal já está preparada para auxiliar nessa transição com soluções de MAM e Playout compatíveis com os novos padrões.</p>
    `,
    date: "2025-02-15",
    author: "Redação Media Portal",
    category: "Regulamentação",
    image: "https://mediaportal.com.br/wp-content/uploads/2025/02/98217-1024x585.webp",
    tags: ["TV 3.0", "Anatel", "Broadcast", "Tecnologia"]
  },
  {
    id: "2",
    slug: "internet-nao-afeta-lideranca-radio-eua",
    title: "Internet não afeta liderança do rádio nos EUA",
    excerpt: "Estudo revela que 85% dos adultos entre 25 e 64 anos nos EUA sintonizam rádio semanalmente, mantendo a relevância do meio no cenário de áudio.",
    content: `
      <p>Mesmo com o crescimento exponencial dos serviços de streaming de música e podcasts, o rádio tradicional continua sendo uma força dominante nos Estados Unidos. Um estudo recente apontou que 85% dos adultos entre 25 e 64 anos ouvem rádio semanalmente.</p>

      <h2>Confiabilidade e Hábito</h2>
      <p>A pesquisa destaca que a confiança nas informações locais e o hábito de ouvir rádio no carro são os principais fatores para essa resiliência. Além disso, o rádio tem se adaptado ao mundo digital, com muitas estações transmitindo simultaneamente via internet e aplicativos.</p>
    `,
    date: "2025-02-10",
    author: "Redação Media Portal",
    category: "Mercado",
    image: "https://mediaportal.com.br/wp-content/uploads/2025/02/49478-1024x683.webp",
    tags: ["Rádio", "EUA", "Pesquisa", "Audiência"]
  },
  {
    id: "3",
    slug: "sudeste-lidera-consumo-smart-tvs-brasil",
    title: "Sudeste lidera consumo de Smart TVs no Brasil, aponta estudo",
    excerpt: "Levantamento da Samsung Ads revela que sudeste se destaca no tempo de visualização de TV linear e streaming, além de apresentar forte engajamento publicitário.",
    content: `
      <p>Um levantamento realizado pela Samsung Ads mostrou que a região Sudeste do Brasil é a líder absoluta no consumo de conteúdo via Smart TVs. O estudo analisou dados de milhões de aparelhos conectados e identificou padrões de comportamento interessantes.</p>

      <h2>Streaming vs. TV Linear</h2>
      <p>Embora o streaming continue crescendo, a TV linear ainda retém uma parcela significativa da atenção, especialmente em eventos ao vivo e noticiários. O Sudeste se destaca não apenas pelo tempo de tela, mas também pela disposição em interagir com publicidade interativa.</p>
    `,
    date: "2025-02-05",
    author: "Redação Media Portal",
    category: "Pesquisa",
    image: "https://mediaportal.com.br/wp-content/uploads/2025/02/2902-1024x683.webp",
    tags: ["Smart TV", "Brasil", "Consumo de Mídia", "Samsung Ads"]
  },
  {
    id: "4",
    slug: "set-2025-chamada-palestrantes",
    title: "SET 2025: chamada para palestrantes no congresso deste ano",
    excerpt: "Profissionais podem submeter propostas de palestras para o Congresso SET EXPO 2025 até 5 de maio.",
    content: `
      <p>A Sociedade Brasileira de Engenharia de Televisão (SET) abriu a chamada de trabalhos para o Congresso SET EXPO 2025. Profissionais do setor, pesquisadores e acadêmicos podem submeter suas propostas de palestras até o dia 5 de maio.</p>

      <h2>Temas em Destaque</h2>
      <p>Este ano, o congresso focará fortemente em Inteligência Artificial aplicada ao broadcast, TV 3.0, produção virtual e sustentabilidade na mídia. É a oportunidade perfeita para compartilhar conhecimento e inovações com o mercado.</p>
    `,
    date: "2025-01-28",
    author: "Eventos",
    category: "Eventos",
    image: "https://mediaportal.com.br/wp-content/uploads/2025/01/63d2e44ec23cd.webp",
    tags: ["SET Expo", "Palestras", "Broadcast", "Evento"]
  },
  {
    id: "5",
    slug: "tv-digital-189-cidades-novos-canais",
    title: "TV digital: 189 cidades terão novos canais",
    excerpt: "Cadastro vai até 31 de janeiro; Pessoas jurídicas e concessionárias podem se cadastrar no site do Ministério das Comunicações.",
    content: `
      <p>O Ministério das Comunicações abriu prazo para que interessados em operar novos canais de TV Digital em 189 cidades brasileiras façam seu cadastro. A medida visa expandir a cobertura do sinal digital e levar mais opções de conteúdo para o interior do país.</p>
    `,
    date: "2025-01-20",
    author: "Redação Media Portal",
    category: "Regulamentação",
    image: "https://mediaportal.com.br/wp-content/uploads/2025/01/25-02-fachada-mcom-pab...webp",
    tags: ["TV Digital", "Ministério das Comunicações", "Expansão"]
  },
  {
    id: "6",
    slug: "tv-cultura-lanca-canal-fast-pluto-tv",
    title: "TV Cultura lança canal FAST na Pluto TV",
    excerpt: "Com programação diversificada e atrações como Roda Viva, Provoca e Jornal da Cultura, o novo canal reforça a presença da emissora no digital.",
    content: `
      <p>A TV Cultura deu mais um passo em sua estratégia digital ao lançar um canal FAST (Free Ad-supported Streaming TV) na plataforma Pluto TV. A iniciativa permite que programas clássicos e atuais da emissora alcancem uma nova audiência no ambiente de streaming.</p>
    `,
    date: "2025-01-15",
    author: "Redação Media Portal",
    category: "Streaming",
    image: "https://mediaportal.com.br/wp-content/uploads/2025/01/Tvcultura-1024x576.webp",
    tags: ["TV Cultura", "FAST", "Pluto TV", "Streaming"]
  },
  {
    id: "7",
    slug: "media-portal-balanco-2024",
    title: "Media Portal celebra balanço positivo em 2024",
    excerpt: "Ano de 2024 marca o crescimento da Media Portal com reconhecimento no SET Expo, participação em grandes eventos e evolução do modelo de negócios.",
    content: `
      <p>O ano de 2024 foi transformador para a Media Portal. Consolidamos nossa posição como líderes em soluções de MAM no Brasil, fechamos parcerias estratégicas e lançamos o CloudFly, nossa solução 100% em nuvem.</p>
    `,
    date: "2024-12-20",
    author: "Institucional",
    category: "Institucional",
    image: "https://mediaportal.com.br/wp-content/uploads/2024/12/cfdasdasdasdas.png",
    tags: ["Media Portal", "2024", "Crescimento", "Retrospectiva"]
  },
  {
    id: "8",
    slug: "media-portal-16-anos",
    title: "Media Portal celebra 16 anos de inovação",
    excerpt: "Empresa comemorou 16 anos de existência e excelência no mercado de broadcast.",
    content: `
      <p>São 16 anos dedicados a organizar e valorizar o acervo audiovisual brasileiro. A Media Portal celebra mais um aniversário com o olhar no futuro, investindo em IA e soluções híbridas para continuar atendendo as maiores emissoras do país.</p>
    `,
    date: "2024-12-01",
    author: "Institucional",
    category: "Institucional",
    image: "https://mediaportal.com.br/wp-content/uploads/2024/12/WhatsApp-Image-2024-11...webp",
    tags: ["Aniversário", "16 Anos", "História"]
  },
  {
    id: "9",
    slug: "canal-uol-estreia-vivo-tv",
    title: "Canal UOL amplia cobertura e estreia na Vivo TV",
    excerpt: "Canal UOL estreia na Vivo TV, ampliando acesso a conteúdos exclusivos de esportes e jornalismo com 40 atrações.",
    content: `
      <p>O Canal UOL agora está disponível para os assinantes da Vivo TV, ampliando significativamente seu alcance. Com uma grade focada em notícias quentes, esportes e entretenimento, o canal se consolida como uma alternativa relevante na TV por assinatura.</p>
    `,
    date: "2024-11-15",
    author: "Redação Media Portal",
    category: "Mercado",
    image: "https://mediaportal.com.br/wp-content/uploads/2024/11/canaluol.png",
    tags: ["UOL", "Vivo TV", "Expansão", "TV Paga"]
  }
];
