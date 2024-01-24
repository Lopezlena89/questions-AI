
import ReactDOM from 'react-dom/client'
import { HomePage } from './components/ui/HomePage';
import { ErrorPage } from './components/ui/ErrorPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage/>,
    
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={router} />
 
  
)
