import React from 'react';
import {useQuizContext} from "../contexts/quiz-context"
import {useInputContext} from "../contexts/input-context"
import {length} from "./Quiz"


 type HeaderProps ={
     quizName:string
 }
const Header: React.FC<HeaderProps> = ({quizName}) => {
const {score,currentQuestionNo} = useQuizContext().state
const {name} = useInputContext().state.user

    return (
        <div>
            <div className="greetingMessage">
                <h1>
                    Welcome {name}
                </h1>
            </div>
            <div className="scoreAndQuizName">
                <h2>
                  {quizName} <span>({currentQuestionNo+1}/{length})</span>
                </h2>
             
                <h2>    
                    Score : {score}
                </h2>
            </div> 
        </div>
    );
};

export default Header;