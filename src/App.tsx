

import { HomePage } from './components/ui/HomePage';
// import { ErrorPage } from './components/ui/ErrorPage';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { LoginPage } from './components/auth/LoginPage';
import { RegisterPage } from './components/auth/RegisterPage';
import { useEffect } from 'react';
import { useAuthStore } from './hooks/useAuthStore';


export const App = () => {
  const {status,checkAuthToken} = useAuthStore();

    useEffect(() => {
      checkAuthToken()
    }, [])
    

    if(status === 'checking'){
      return(
        <h3>Cargando...</h3>
      )
    }
    
  
  return (
    // <BrowserRouter>
      <Routes>
          {
              (status === 'not-authenticated')
              ? (
                <>
                  <Route path='/auth/*' element={<LoginPage/>}/>
                  <Route path='/auth/new/*' element={<RegisterPage/>}/>
                  <Route path="/*" element={<Navigate to='/auth'/>}/>
                </>
                
              )
              : (
                <>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/:id' element={<HomePage/>}/>
                  <Route path="/*" element={<Navigate to='/'/>}/>
                </>
              )
          }
          
          
          
      </Routes>
    // </BrowserRouter>
  )
}
