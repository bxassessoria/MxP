import { Switch, Route } from "wouter";
import ScrollToTop from "./components/ScrollToTop";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Cases from "@/pages/Cases";
import CaseDetail from "@/pages/CaseDetail";
import Integrations from "@/pages/Integrations";
import NotFound from "@/pages/not-found";
import CloudFly from "@/pages/products/CloudFly";
import CloudLink from "@/pages/products/CloudLink";
import GendaiTV from "@/pages/products/GendaiTV";
import GemsInABox from "@/pages/products/GemsInABox";
import TvCultura from "@/pages/cases/TvCultura";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/produtos" component={Products} />
      <Route path="/produtos/cloudfly" component={CloudFly} />
      <Route path="/produtos/cloudlink" component={CloudLink} />
      <Route path="/produtos/gendai-tv" component={GendaiTV} />
      <Route path="/produtos/gems-in-a-box" component={GemsInABox} />
      <Route path="/cases" component={Cases} />
      <Route path="/cases/tv-cultura" component={TvCultura} />
      <Route path="/cases/:slug" component={CaseDetail} />
      <Route path="/integracoes" component={Integrations} />
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
