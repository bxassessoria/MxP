import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Cases from "@/pages/Cases";
import Integrations from "@/pages/Integrations";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";
import BroadcastPage from "@/pages/seo/Broadcast";
import MAMPage from "@/pages/seo/MAM";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtos" component={Products} />
      <Route path="/product/:id" component={ProductDetail} />
      
      {/* Rotas legadas/alternativas para produtos SEO */}
      <Route path="/produtos/gendai-tv" component={BroadcastPage} />
      <Route path="/produtos/cloudfly" component={MAMPage} />
      
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
      <Router />
    </>
  );
}

export default App;
