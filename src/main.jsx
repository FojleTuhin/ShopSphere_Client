import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './root/Root';
import Home from './home/Home';
import Login from './shared/Login';
import Signup from './shared/Signup';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import FirebaseProvider from './firebase/FirebaseProvider';

const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<Signup></Signup>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
      <RouterProvider router={router} />
      </FirebaseProvider>
    </QueryClientProvider>
  </StrictMode>,
)
