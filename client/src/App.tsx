import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Cases from "@/pages/Cases";
import Integrations from "@/pages/Integrations";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import AdminLogin from "@/pages/admin/Login";
import AdminDashboard from "@/pages/admin/Dashboard";
import AdminEditor from "@/pages/admin/Editor";
import CasesList from "@/pages/admin/CasesList";
import CaseEditor from "@/pages/admin/CaseEditor";
import CaseDetail from "@/pages/CaseDetail";
import EncontroBH from "@/pages/EncontroBH";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import ScrollToTop from "@/components/ScrollToTop";

// Importar páginas de produtos individuais
import CloudFly from "@/pages/products/CloudFly";
import CloudLink from "@/pages/products/CloudLink";
import CustomPrj from "@/pages/products/CustomPrj";
import GemsInABox from "@/pages/products/GemsInABox";
import GendaiNews from "@/pages/products/GendaiNews";
import GendaiTV from "@/pages/products/GendaiTV";

function App() {
  return (
    <WouterRouter hook={useHashLocation}>
      <ScrollToTop />
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
      <Route path="/cases/:slug" component={CaseDetail} />
      <Route path="/integracoes" component={Integrations} />
      <Route path="/integrations">
        {() => {
          window.location.hash = "#/integracoes";
          return null;
        }}
      </Route>
      <Route path="/sobre" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/encontro-bh" component={EncontroBH} />
      <Route path="/contato" component={Contact} />

      {/* Rotas do Admin */}
      <Route path="/painel" component={AdminLogin} />
      <Route path="/painel/dashboard" component={AdminDashboard} />
      <Route path="/painel/new" component={AdminEditor} />
      <Route path="/painel/edit/:id" component={AdminEditor} />
      <Route path="/painel/cases" component={CasesList} />
      <Route path="/painel/cases/new" component={CaseEditor} />
      <Route path="/painel/cases/edit/:id" component={CaseEditor} />
      
      {/* Fallback 404 */}
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
