import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import SuspenseFallback from './components/SuspenseFallback';
import NotFound from './pages/NotFound';

// Lazy loading components
const Home = React.lazy(() => import('./pages/Home'));
const ProductDetail = React.lazy(() => import('./pages/ProductDetail'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const Checkout = React.lazy(() => import('./pages/Checkout'));

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'product/:id',
        element: <ProductDetail />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
