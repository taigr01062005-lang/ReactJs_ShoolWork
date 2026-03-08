
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import GuestPage from './pages/GuestPage';
import ProductPage from './pages/ProductPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/user',
        element: <UserPage />
      },
      {
        path: '/guest',
        element: <GuestPage />
      },
      {
        path: '/product',
        element: <ProductPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
