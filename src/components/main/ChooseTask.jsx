import React from 'react';
import '../App.css';
import Description from '../description/Description'

function ChooseTask(props) {
            
      return (
        <>
            {
                  props.tasks.map( i => 
                  <>
                        <option id={i.id} className='task' onClick={ ()=>{<Description /> } }>{i.title}</option>
                        {/* <button onClick={ ()=>{props.removeTask(i.id)} }></button> */}
                  </>
                  )
            }
        </>
      )
  }
  
  export default ChooseTask;