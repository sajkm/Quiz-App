import React from 'react'
import { useState } from 'react';
import { Data } from '../Pages/Data.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

        
         <div className='container w-50 h-75 shadow border align-items-center rounded bg-warning '>
         <div className='shadow align-items-center justify-content-center d-flex mt-3 border rounded fw-bolder ' style={{height:'100px',color:'black'}}>
             <span id="question-number">{currentQ+1}.</span>
             <span id="question-txt" >{Data[currentQ].question}</span>
         </div>
         {Data[currentQ].options.map((option,i)=>{
          return(
         <div key={i}  className='mt-2 align-items-center d-flex flex-column'  >
         <button className={`btn mt-2 w-75 ${Option == i+1?"checked":null}`} onClick={()=>setOption(i+1)}>{option}</button>
         </div>
          )
         })
        }

         <div className='mt-2 justify-content-center d-flex' >
           <input style={{color:'black'}} className='btn bg-primary' type="button" value="NEXT" id='next-btn' onClick={changeQuestion}/>
           <input style={{color:'black'}} className='btn bg-primary ms-3' type="button" value="Score" id='next-btn' onClick={handleShow}/>
         </div>
       </div>
    

        <Modal className='bg-dark' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Score</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fw-bolder' style={{color:'black',fontSize:'25px'}}>Your Score:{score}</Modal.Body>
        <Modal.Footer>
          <Button style={{color:'black'}} className='btn bg-primary' onClick={resetAll}>Reset</Button>
          </Modal.Footer>
      </Modal>
        
    </div>
    </>
  )
}

export default Home