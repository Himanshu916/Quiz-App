import React from 'react';
import MindGames from "./components/MindGames"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Result from "./components/Result"
import {Routes,Route} from "react-router-dom"
import './App.css';



const  App=()=> {
 
  // const [score,setScore] =useState(0);
  return (
    <div className="App">
      <MindGames/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
      {/* <button onClick={()=>{setNum(num=>num+1)}}>Next Question</button> */}
    </div>
  );
}

export default App;
