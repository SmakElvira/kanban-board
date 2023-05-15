import React, { useState } from 'react';
import {v1} from 'uuid';
import Title from './Title';
import TasksBacklog from './TasksBacklog';
import ButtonAdd from './ButtonAdd';
import ButtonChoiceReady from './ButtonChoiceReady';
import ButtonChoiceInProgress from './ButtonChoiceInProgress';
import ButtonChoiceFinished from './ButtonChoiceFinished';

//import Footer from '../footer/Footer';

function Board(props) {
  
    let todoListIdBacklog = v1();
    let todoListIdReady = v1();
    let todoListIdInProgress = v1();
    let todoListIdFinished = v1();

    let todoList = [
        { id: todoListIdBacklog, title: 'Backlog'},
        { id: todoListIdReady, title: 'Ready'},
        { id: todoListIdInProgress, title: 'In Progress'},
        { id: todoListIdFinished, title: 'Finished'}
    ]

    let tasksBacklog = [  
      {id: 0, title: "Task 1", isDone: true, list: todoListIdBacklog},
    ]

    let [newTasksBacklog, setTasksBacklog] = useState(tasksBacklog)
    
    let tasksReady = [
      {id: 1, title: "Task 4 from Backlog", isDone: true},
      {id: 2, title: "Task 5 from Backlog", isDone: false}]
      
    let [newTasksReady, setTasksReady] = useState(tasksReady)

    let tasksInProgress = []
    let [newTasksInProgress, setTasksInProgress] = useState(tasksInProgress)

    let tasksFinished = []
    let [newTasksFinished, setTasksFinished] = useState(tasksFinished)

    function removeTaskFromBacklog(id) {
      setTasksBacklog(newTasksBacklog.filter(i => i.id !== id))
    }

    function removeTaskFromReady(id) {
      setTasksReady(newTasksReady.filter(i => i.id !== id))
    }

    function removeTaskFromInProgress(id) {
      setTasksInProgress(newTasksInProgress.filter(i => i.id !== id))
    }

    function getNumId() {
      return (newTasksBacklog.length + newTasksReady.length + newTasksInProgress.length + newTasksFinished.length + 1)
    }

    function addTasksBacklog(title) {
      let submitTask = { id: getNumId(), title: title, isDone: false};
      setTasksBacklog(prev => [...prev, submitTask])
      localStorage.setItem('backlog', newTasksBacklog)
      
    }

    function getNewTasksBacklog(newTasksBacklog) {
      props.getBacklogTasks(newTasksBacklog)
    }
    console.log(newTasksBacklog)
    getNewTasksBacklog(newTasksBacklog)

    function addTasksReady(title) {
      let submitTask = newTasksBacklog.find(i => i.title === title)
      setTasksReady(prev => [...prev, submitTask])
      removeTaskFromBacklog(submitTask.id)
    }

    function addTasksInProgress(title) {
      let submitTask = newTasksReady.find(i => i.title === title)
      setTasksInProgress(prev => [...prev, submitTask])
      removeTaskFromReady(submitTask.id)
    }

    function addTasksFinished(title) {
      let submitTask = newTasksInProgress.find(i => i.title === title)
      setTasksFinished(prev => [...prev, submitTask])
      removeTaskFromInProgress(submitTask.id)
    }

    function getNewTasksFinished(newTasksFinished) {
      props.getFinishedTasks(newTasksFinished)
    }
    getNewTasksFinished(newTasksFinished)
    
    return (
      <div className='container'>
        <div className="cardBlocks">
          <div className="containerBlock">
              {/* {
                  todoList.map( (tl)=> {
                    return  <div className="containerBlock">
                            <Title key={tl.id} title={tl.title}/>
                            <TasksBacklog tasks={newTasksBacklog} todoListId={todoList.id} removeTask={removeTask} />
                            <ButtonAdd addTasksBacklog={addTasksBacklog} />
                            </div>

                  } )
              } */}
            <Title title={todoList[0].title}/>
            <TasksBacklog tasks={newTasksBacklog} />
            <ButtonAdd addTasksBacklog={addTasksBacklog} />
             {/* <Footer active={newTasksBacklog.length} /> */}
          </div>
          <div className="containerBlock">
            <Title title={todoList[1].title}/>
            <TasksBacklog tasks={newTasksReady}  />
            <ButtonChoiceReady tasks={newTasksBacklog} addTasksReady={addTasksReady} removeTaskFromBacklog={removeTaskFromBacklog} />
          </div>
          <div className="containerBlock">
            <Title title={todoList[2].title}/>
            <TasksBacklog tasks={newTasksInProgress} />
            <ButtonChoiceInProgress tasks={newTasksReady} addTasksInProgress={addTasksInProgress} />
          </div>
          <div className="containerBlock">
            <Title title={todoList[3].title}/>
            <TasksBacklog tasks={newTasksFinished} />
            <ButtonChoiceFinished tasks={newTasksInProgress} addTasksFinished={addTasksFinished} />
          </div>
        </div>
      </div>
    )
  }

export default Board; 