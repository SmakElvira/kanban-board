import React from 'react';
import '../App.css';
import Description from '../description/Description';

import { NavLink } from 'react-router-dom';

function TasksBacklog(props) {
      
      return (
        <>
            {
                  props.tasks.map( i => 
                  <>
                        <NavLink to={`/tasks/${i.id}`} key={i.id} className='task' onClick={ ()=>{console.log(i.id)} }>{i.title}</NavLink>
                        {/* <button onClick={ ()=>{props.removeTask(i.id)} }></button> */}
                  </>
                  )
            }
        </>
      )
  }
  
  export default TasksBacklog;