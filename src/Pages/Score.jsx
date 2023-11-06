import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

function Score(props) {

  return (
    <div >
     
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial',width:'500px' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>
          Your Score:{props.score}<br/>
          Total Score:{props.totalScore}
          </Modal.Title>
        </Modal.Header>

        <Modal.Footer>
        <button className='btn bg-primary' style={{color:'black'}} id="next-button" onClick={props.tryAgain}>Try Again</button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>


    
   
  )
}

export default Score