import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import LaunchStablecoin from "@/pages/launch-stablecoin";
import OfferDefiProducts from "@/pages/offer-defi-products";
import SecureDefiOps from "@/pages/secure-defi-ops";
import NotFound from "@/pages/not-found";

// Component to handle scroll-to-top on route changes
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/launch-stablecoin" component={LaunchStablecoin} />
        <Route path="/offer-defi-products" component={OfferDefiProducts} />
        <Route path="/secure-defi-ops" component={SecureDefiOps} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="verto-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
