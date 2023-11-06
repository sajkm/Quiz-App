import React from 'react'
import { useState } from 'react';
import { Data } from '../Pages/Data.jsx';
import Score from '../Pages/Score.jsx';


function Home() {
  const [currentQ,setCurrentQ]=useState(0);
  const [score,setScore] = useState(0);
  const [Option,setOption]=useState(0);
  const [Result,setResult]=useState(false);
  
  const changeQuestion = ()=>{
      updateScore();
      if(currentQ< Data.length-1){
          setCurrentQ(currentQ+1);
          setOption(0);
      }else{
          setResult(true)
      }
  }
  const updateScore=()=>{
      if(Option===Data[currentQ].answer){
          setScore(score+1);
      }
  }
  const resetAll=()=>{
      setResult(false);
      setCurrentQ(0);
      setOption(0);
      setScore(0);
  }
  return (
    <>
    <div className='d-flex align-items-center justify-content-center bg-grey flex-column' style={{width:'100%', height:'100vh'}}>
        <h1 className='fw-bolder'>QUIZ APP</h1>
        <p>Point:{score}</p>

        {Result ? (
                <Score score={score} totalScore={Data.length} tryAgain={resetAll}/>
            ):(
         <div style={{backgroundColor:'orange'}} className='container w-50 h-75 shadow border align-items-center rounded '>
         <div className='shadow align-items-center justify-content-center d-flex mt-3 border rounded fw-bolder ' style={{height:'100px',color:'black'}}>
             <span id="question-number">{currentQ+1}.</span>
             <span id="question-txt" >{Data[currentQ].question}</span>
         </div>
         {Data[currentQ].options.map((option,i)=>{
          return(
         <div key={i}  className='mt-2 align-items-center d-flex flex-column'  >
         <button className={`btn btn-warning mt-2 w-75 ${Option == i+1?"checked":null}`} onClick={()=>setOption(i+1)}>{option}</button>
         </div>
          )
         })
        }

         <div className='mt-2 justify-content-center d-flex' >
           <input style={{color:'black'}} className='btn bg-primary' type="button" value="NEXT" id='next-btn' onClick={changeQuestion}/>
         </div>
       </div> 
       )} 
    </div>
    </>
  )
}

export default Home