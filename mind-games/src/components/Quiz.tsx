import React,{useEffect,useState} from 'react';
import Header from "./Header";
import QuestionCard from "./QuestionCard"
import {useInputContext} from "../contexts/input-context"
import {getQuiz} from "../data/getQuiz"
import {Question} from "../data/quiz.types"
export let length=0;
export let marks = 0;

type ServerError = {
    success:boolean
    errorMessage:string
}
const Quiz = () => {
    const {category} = useInputContext().state
    const [questions,setQuestions] = useState<Question[]|null>(null)
    const [error,setErr] = useState<ServerError|null>(null);
     length = questions ? questions.length :0
    
    console.log(category,"tu ka")
  
    useEffect(() => {
     
       ( async()=>
        {
            const quiz = await getQuiz(category);
            console.log(quiz,"ka ho gayo")
            if ("name" in quiz)
            {
                quiz.questions.forEach(item => marks += item.marks)
                setQuestions(quiz.questions)
            }
          
            else setErr(quiz)
           
        })()
       
    },[category]);
    console.log(questions)
    return (
        
        <>
               {
                category?
                    <div>
                        <Header quizName={category} />
                        {error && error.errorMessage}
                        {questions &&  <QuestionCard questions={questions} />}
                     
                    </div>:
                    <div>
                        There is no quiz
                    </div>
               }
        </> 
        
     
      
    );
};

export default Quiz;