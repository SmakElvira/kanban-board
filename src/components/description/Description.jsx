import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function Description(props) {

    const {id} = useParams();
    //const result = (id) => { tasksBacklog.find(i => i.id === id) }
  
    //let [task, setTask] = useState(tasksBacklog)

    // function filterTask(id) {
    //   setTask(task.find(i => i.id === id))
    //   //setTask(newTask)
    // }
    //filterTask(id)

    console.log(props.tasks)
    
    return (
      <NavLink to='/'>
          <div className='container'>
            <div className="cardTask">
                <div className="containerTask">
                  <div className="divDescription">
                    <p className="nameDescription" id={props.tasks[id].id}>{props.tasks[id].title}</p>
                    <button style={{border: "0", cursor: "pointer", backgroundColor: "none"}} onClick={ () => {alert('Закрыть?')} }>
                      <svg className="closeIcon" width={40} height={40} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
                    </button>
                  </div>
                    <p className="description">{props.tasks[id].id}</p>
                </div>
            </div>
          </div>
      </NavLink>
    )
}

export default Description;