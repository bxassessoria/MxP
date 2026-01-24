import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import MAMPage from "./pages/seo/MAM";
import DAMPage from "./pages/seo/DAM";
import BroadcastPage from "./pages/seo/Broadcast";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Integrations from "./pages/Integrations";
import Cases from "./pages/Cases";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/products"} component={Products} />
      <Route path="/products/:id" component={ProductDetail} />
      <Route path="/seo/mam" component={MAMPage} />
      <Route path="/seo/dam" component={DAMPage} />
      <Route path="/seo/broadcast" component={BroadcastPage} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/about"} component={About} />
      <Route path={"/integrations"} component={Integrations} />
      <Route path={"/cases"} component={Cases} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
