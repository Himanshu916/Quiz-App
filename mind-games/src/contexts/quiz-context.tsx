import {createContext,useContext,ReactNode,useReducer} from "react"


type QuizContextState ={
    score:number,
    currentQuestionNo:number
}

type QuizContextValue = {
    state:QuizContextState,
    dispatch:any
}

type Action = {type:"setScore",payload:number} |{type:"setQuestion"} | {type:"setReset"}

const initialState:QuizContextState = {
    score:0,
    currentQuestionNo:0
}
const QuizContext = createContext<QuizContextValue>({state:{score:0,currentQuestionNo:0},dispatch:""});

const reducer=(state:QuizContextState,action:Action)=>
{
    switch (action.type) {
        case "setQuestion":
            return {...state,currentQuestionNo:state.currentQuestionNo+1}
        case "setScore" :
            return {...state,score:state.score+action.payload}
        case "setReset" :
            return {...state,score:0,currentQuestionNo:0}
        default:
            return state
    }

}

export function QuizContextProvider({children}:{children:ReactNode})
{
    const [state,dispatch] = useReducer(reducer,initialState)

    return ( <QuizContext.Provider value={{state,dispatch}}>
            {children}
    </QuizContext.Provider>)

}

export const useQuizContext=() => useContext(QuizContext)  