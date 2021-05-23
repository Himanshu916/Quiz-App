import React from 'react';
import {useNavigate} from "react-router-dom"
import {useQuizContext} from "../contexts/quiz-context"

const MindGames= () => {
    const {dispatch} = useQuizContext();
    const Navigate = useNavigate()
    const homePage=()=>
    {
        dispatch({type:"setReset"});
        Navigate("/")



    }
    return (
        <div className="mind-games">
            <p onClick={homePage}>
               
                Mind Games
            
            </p>
            
        </div>
    );
};

export default MindGames;