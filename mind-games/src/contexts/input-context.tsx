
import {createContext,ReactNode,useReducer,useContext} from "react";

type User={
    name:string
}
type InputContextValue = {
    state:InputContextState,
    dispatch:any
}
type InputContextState = {
    user:User,
    category:string
}
const initialState:InputContextState = {
    user:{name:""},
    category:""
}
type Action ={type:"setUserName"|"setCategory",payload:string} 


const reducer=(state:InputContextState,action:Action)=>
{
    switch (action.type) {
        case "setUserName":
            
         return {...state,user:{...state.user,name:action.payload}}
        case "setCategory" :
            return {...state,category:action.payload}
        default:
            return state
    }
}

const InputContext = createContext<InputContextValue>({state:{user:{name:""},category:""},dispatch:""});

export const InputProvider=({children}:{children:ReactNode})=>
{
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
    <InputContext.Provider value={{state,dispatch}}>
        {children}
    </InputContext.Provider>
    )
}

export const useInputContext=()=>
{
    return useContext(InputContext);
}
