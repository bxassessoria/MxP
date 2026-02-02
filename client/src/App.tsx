import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Cases from "@/pages/Cases";
import Integrations from "@/pages/Integrations";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";

// Importar páginas de produtos individuais
import CloudFly from "@/pages/products/CloudFly";
import CloudLink from "@/pages/products/CloudLink";
import CustomPrj from "@/pages/products/CustomPrj";
import GemsInABox from "@/pages/products/GemsInABox";
import GendaiNews from "@/pages/products/GendaiNews";
import GendaiTV from "@/pages/products/GendaiTV";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtos" component={Products} />
      
      {/* Rotas Específicas dos Produtos */}
      <Route path="/produtos/cloudfly" component={CloudFly} />
      <Route path="/produtos/cloudlink" component={CloudLink} />
      <Route path="/produtos/custom-prj" component={CustomPrj} />
      <Route path="/produtos/gems-in-a-box" component={GemsInABox} />
      <Route path="/produtos/gendai-news" component={GendaiNews} />
      <Route path="/produtos/gendai-tv" component={GendaiTV} />
      
      <Route path="/cases" component={Cases} />
      <Route path="/integracoes" component={Integrations} />
      <Route path="/sobre" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      
      {/* Fallback 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
}

export default App;
