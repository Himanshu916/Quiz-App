import {length} from "../components/Quiz"
import {count,rightAnswers} from "../components/QuestionCard"
import {useQuizContext} from "../contexts/quiz-context";
import {marks} from "../components/Quiz";
const Result=()=>
{
    const {score} = useQuizContext().state;
    const percentage= Math.round((score/marks)*100);
  return (
    <div className="result">
            <div className="percentage">
                <h3>
                    You Scored {percentage}%
                </h3>
          
            </div>
        <div className="resultBoxes">   
            <div className="resultBox">
                Score :{score}
            </div>
            <div  className="resultBox">
                Total Questions :{length}
            </div>
            <div  className="resultBox">
                Correct Answers :{rightAnswers}
            </div>
            <div  className="resultBox">
                Wrong Answers :{count}
            </div>
        </div>
        <div className="congratulations">
            <h1 className="congratulateMessage">

            {(()=>
                    {
                        if(percentage<40)
                        return "You need to work more."
                        else if(percentage>=40 && percentage < 70)
                        return "You are good"
                        else if(percentage>=70 && percentage <90)
                        return "You are very good"
                        else
                        return "You are excellent"
                    })()
            }
               </h1>
        </div>
     
    </div>
  )
}
export default Result