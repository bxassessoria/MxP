export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags?: string[];
}

// Array vazio para iniciar limpo em produção.
// O site tentará carregar de /api/posts.json.
export const blogPosts: BlogPost[] = [];
