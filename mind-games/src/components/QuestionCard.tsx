import React,{useState} from 'react';
import {Question,Option} from "../data/quiz.types"
import {useQuizContext} from "../contexts/quiz-context"
import {useNavigate} from "react-router-dom"
import Error from "../components/ErrorMessage"
 
type HeaderProps = {
    questions:Question[]
}
export let count=0;
export let rightAnswers = 0;
const QuestionCard :React.FC<HeaderProps>= ({questions}) => {

    const [selected,setSelected] = useState<String>("");
    const {currentQuestionNo} = useQuizContext().state
    const {dispatch} = useQuizContext()
    const Navigate = useNavigate();
    const [error,setError] = useState(false)
    console.log(questions.length)
    console.log(currentQuestionNo)
    const selectHandler=({answer,isRight}:Option)=>
    {
      
        if(selected === answer && isRight )
            return "select";
       
        else if(selected === answer && isRight===false )
            return "wrong";

       
        else if(isRight === true)
         return "select";
        
        
    }

    function questionHandler()
    {
        console.log("inside handlet",currentQuestionNo)
       if(currentQuestionNo >= questions.length-1)
       {
           console.log("is it what?")
        Navigate("/result")
       }
        
        else if(selected && currentQuestionNo < questions.length)
        {
            console.log(currentQuestionNo,"else if ")
        dispatch({type:"setQuestion"})
        setSelected("")
        }
     
        else 
        setError(true)
    }

    const clickHandler=(option:Option)=>
    {
        setSelected(option.answer)

        if(option.isRight)
        {
            dispatch({type:"setScore",payload:questions[currentQuestionNo].marks})
            ++rightAnswers;
        }
     
  
        else if(!option.isRight)
            ++count;
        setError(false)
      
    } 
    console.log(selected)
console.log(questions[currentQuestionNo])
  
    return (
      
      <>
          {
            <div className="questionCard">
                <div className="question">
                    {
                        <h1>
                          Question:{currentQuestionNo+1}  { questions[currentQuestionNo].question}
                        </h1>
                        
                    }
                </div>
                <div className="errorOption">
                            {error && <Error>Please select an option</Error>}
                </div>
                <div className="options">
                      
                    {
                        questions[currentQuestionNo].options.map((option)=> <button onClick={()=>clickHandler(option)} key={option.answer} className={`option ${selected && selectHandler(option)}  `} disabled={selected && true} >{option.answer}</button> )
                    }
                </div>
                <div className="buttons">
                           <button onClick={()=>Navigate(`/result`)} className="button">
                               Quit 
                           </button>
                           <button  onClick={()=>dispatch({type:"setReset"})} className="button">
                               Reset
                           </button>
                           <button className="button" onClick={questionHandler}>
                               Next
                           </button>
                       </div>
             </div>

          }
        </>
    );
};

export default QuestionCard;