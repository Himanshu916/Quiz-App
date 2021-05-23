import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import categories from "../data/categories";
import Error from "./ErrorMessage"
import {useNavigate} from "react-router-dom";
import {useInputContext} from "../contexts/input-context";


const Home = () => {

const {state,dispatch} = useInputContext();
const {name,} = state.user;
const {category} = state
console.log(category,"bhai kya hua")
const [error,setError] = useState<Boolean>(false)
const Navigate = useNavigate();
function clickHandler()
{
   if(!name || !category)
   {
        setError(true)
   }
   else{
       setError(false);
       Navigate(`/quiz`);

   }
}

    return (
        <div className="home">
           <div className="settings" >
               <h3>Quiz Settings</h3>
               
               <div className="quizInputs">
                    {error && <Error>Please Fill all the details</Error>}
                   <TextField className="input" id="outlined-basic" label="Enter Your Name" variant="outlined" value={name} onChange={(e)=>dispatch({type:"setUserName",payload:e.target.value})} />
                   <TextField className="input" select label="Select Category" variant="outlined" value={category} onChange={(e)=>dispatch({type:"setCategory",payload:e.target.value})}  >
                       {
                           categories.map(cat=>  <MenuItem key={cat.category} value={cat.value} >
                           {cat.category}
                       </MenuItem>)
                       }
                       
                   </TextField>
                   <button onClick={clickHandler} className="primary">Start Quiz</button>
               </div>
               

           </div>
           <img src="/quiz.svg" className="quizImage" alt="Quiz Img" />
        </div>
    );
};

export default Home;