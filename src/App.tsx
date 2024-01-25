

import { HomePage } from './components/ui/HomePage';
import { ErrorPage } from './components/ui/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
    
  },
  {
    path: "/auth",
    element: <LoginPage />,
  },
  {
    path: "/auth/new",
    element: <RegisterPage />,
  },
]);


export const App = () => {
  
  return (
    <RouterProvider router={router} />
  )
}
