import { useDispatch, useSelector } from "react-redux";
import geminiapi from '../api/gemini-api';
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../redux/authSlice";
import type { RootState } from '../redux/store'


export const useAuthStore = () =>{

    const { status,user, errorMessage} = useSelector((state:RootState) => state.auth);
    const dispatch = useDispatch();


    const startLogin = async({ email,password }:{email:string,password:string}) =>{
        dispatch(onChecking());

        try {
            
            const {data} = await geminiapi.post('/auth',{email,password});
           
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', String(new Date().getTime()));
            dispatch(onLogin({name:data.name,uid:data.uid}));
            if(data){
                window.location.replace('/');
            }
            
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(()=>{
                dispatch(clearErrorMessage())
            },10);
        }
    }

    const startRegister = async({ email,password,name }:{email:string,password:string,name:string}) =>{
        dispatch(onChecking());

        try {
            
            const {data} = await geminiapi.post('/auth/new',{email,password, name});
            console.log({data})
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', String(new Date().getTime()));
            dispatch(onLogin({name:data.name,uid:data.uid}));
            
        } catch (error) {
            dispatch(onLogout(error.response.data.msg || '--'));
            setTimeout(()=>{
                dispatch(clearErrorMessage())
            },10);
        }
    }

    const checkAuthToken = async() =>{
        const token = localStorage.getItem('token');
        if(!token) return  dispatch(onLogout());

        try {
            const {data} = await geminiapi.get('auth/renew');
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', String(new Date().getTime()));
            dispatch(onLogin({name:data.name,uid:data.uid}));
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout())
        }
    }

    const startLogout = () =>{
        localStorage.clear();
      
        dispatch(onLogout());
    }


    return {
        //Propiedades
        status,
        user, 
        errorMessage,

        //Metodos
        checkAuthToken,
        startLogin,
        startRegister,
        startLogout
    }
}