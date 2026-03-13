import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeToggleBar } from "./components/ThemeToggleBar";
import Checkout from "./pages/Checkout";
import Customize from "./pages/Customize";
import Gen4ElcOptions from "./pages/Gen4ElcOptions";
import Gen5Customize from "./pages/Gen5Customize";
import Gen5Options from "./pages/Gen5Options";
import Gen6Options from "./pages/Gen6Options";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import PastGens from "./pages/PastGens";

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
  path: "/",
  component: Home,
});

const gen4ElcRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gen4-elc",
  component: Gen4ElcOptions,
});

const gen5Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gen5",
  component: Gen5Options,
});

const gen5CustomizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gen5-customize",
  component: Gen5Customize,
});

const customizeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/customize",
  component: Customize,
});

const gen6Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/gen6",
  component: Gen6Options,
});

const pastGensRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/past-gens",
  component: PastGens,
});

const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: Checkout,
});

const orderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-confirmation",
  component: OrderConfirmation,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  gen4ElcRoute,
  gen5Route,
  gen5CustomizeRoute,
  customizeRoute,
  gen6Route,
  pastGensRoute,
  checkoutRoute,
  orderConfirmationRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
