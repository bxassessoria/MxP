import { Switch, Route } from "wouter";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import CloudFly from "@/pages/products/CloudFly";
import CloudLink from "@/pages/products/CloudLink";
import GendaiTV from "@/pages/products/GendaiTV";
import GemsInABox from "@/pages/products/GemsInABox";
import Integrations from "@/pages/Integrations";
import Cases from "@/pages/Cases";
import CaseDetail from "@/pages/CaseDetail";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/cloudfly" component={CloudFly} />
        <Route path="/product/cloudlink" component={CloudLink} />
        <Route path="/product/gendai-tv" component={GendaiTV} />
        <Route path="/product/gems-in-a-box" component={GemsInABox} />
        <Route path="/integrations" component={Integrations} />
        <Route path="/cases" component={Cases} />
        <Route path="/cases/:id" component={CaseDetail} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
