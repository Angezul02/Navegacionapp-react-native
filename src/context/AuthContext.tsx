//definir como luce o que información se tendrá aqui 

import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?:string;

}
 // estado inicial - como quiero que sea mi estado justo cuando se lanza la aplicación

 export const AuthInicialState:AuthState={
    isLoggedIn:false,
    userName: undefined,
    favoriteIcon: undefined,
 }

 //Definir todo lo que el context va a proporcionarle a los hijos , se puede crear una interfaz para lograrlo
 //Lo usaremos para decirle React cómo luce y qué expone el context 

 export interface AuthContextProps {
    authState: AuthState;
    signIn:()=>void;
    changeFavoriteIcon: (iconName: string) => void;
    logOut: () => void;
    changeUserName: (username: string) => void;


 }

 // crear el contexto 

 export const AuthContex= createContext({} as AuthContextProps)

 //componente proveedor del estado (de la informacion)

 export const AuthProvider= ({children}:any)=>{

    const [authState, dispatch] = useReducer(authReducer, AuthInicialState)

    const signIn =()=>{
        dispatch({type:'signIn'}) 
    } 

    const changeFavoriteIcon = (iconName:string)=>{
        dispatch({type:'changeFavIcon', payload:iconName})
    }
        
    const logOut = ()=>{
        dispatch({type:'logOut'})
    }

    const changeUserName = (username:string) =>{
        dispatch({type:'changeUserName', payload:username})
    }

    return (
        <AuthContex.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logOut,
            changeUserName,
        }}>
            {
                children
            }
        </AuthContex.Provider>
    )
 }

