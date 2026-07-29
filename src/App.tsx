import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Home from '@/pages/Home';
import About from '@/pages/About';
import HowTo from '@/pages/HowTo';
import Cookies from '@/pages/Cookies';
import Credentials from '@/pages/Credentials';
import NotFound from '@/pages/not-found';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/how-to" component={HowTo} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/credentials" component={Credentials} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
