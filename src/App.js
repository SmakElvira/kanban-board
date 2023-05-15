import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Board from './components/main/Board';
import Footer from './components/footer/Footer';
import Description from './components/description/Description'
import ScrollToTop from './utils/ScrollToTop';

function App () {

  let [tasks, setTasks] = useState([])

  function getBacklogTasks(tasks) {
    setTasks(tasks)
  }

  let [tasksFinished, setTasksFinished] = useState([])

  function getFinishedTasks(tasks) {
    setTasksFinished(tasksFinished)
  }

  console.log(tasks)

  return (
    <>
    <Router>
        <ScrollToTop />
          <div className='blockHeader'>
              <Header />
          </div>
          <Routes>
                  <Route path='/' element={<Board className='blockBody' activeTasksBacklog={4} getBacklogTasks={getBacklogTasks} getFinishedTasks={getFinishedTasks} />} />
                  <Route path='/tasks/:id' element={<Description  tasks={tasks} />} />
          </Routes>
          <div className='blockBody'>
              <Footer activeTasks={tasks.length} finishedTasks={tasksFinished.length} />
          </div>
      </Router>
    </>
  )
}

export default App;