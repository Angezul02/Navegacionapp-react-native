import { AuthState } from "./AuthContext";

type AuthAction = 
|{ type:"signIn" }
|{ type:"logOut" }
|{ type: "changeFavIcon", payload: string }
|{ type: "changeUserName", payload: string }

export const authReducer =(state: AuthState, accion: AuthAction): AuthState =>{
 switch (accion.type) {
    case 'signIn':
        return{
            ...state,
            isLoggedIn:true,
            userName: "no-username"
        }
        
    case 'changeFavIcon':
        return{
            ...state,
            favoriteIcon: accion.payload

        }
        
    case 'logOut':
        return{
            ...state,
            isLoggedIn:false,
            userName: undefined,
            favoriteIcon: undefined
            
        }
    case 'changeUserName':
        return{
            ...state,
            userName: accion.payload,
            
        }
    
 
    default:
        return state;
 }


}