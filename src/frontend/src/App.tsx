import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Home from './pages/Home';
import Gen4ElcOptions from './pages/Gen4ElcOptions';
import Gen5Options from './pages/Gen5Options';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggleBar } from './components/ThemeToggleBar';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-background pb-20">
        <Outlet />
      </div>
      <ThemeToggleBar />
      <Toaster />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const gen4ElcRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gen4-elc',
  component: Gen4ElcOptions,
});

const gen5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gen5',
  component: Gen5Options,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: Checkout,
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/order-confirmation',
  component: OrderConfirmation,
});

const routeTree = rootRoute.addChildren([indexRoute, gen4ElcRoute, gen5Route, checkoutRoute, orderConfirmationRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
