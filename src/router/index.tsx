import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: 'documents',
      //   element: <Documents />,
      // },
      // {
      //   path: 'chat',
      //   element: <Chat />,
      // },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
