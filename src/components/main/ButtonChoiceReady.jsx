import React from 'react';
import '../App.css';
import ChooseTask from './ChooseTask';

class ButtonChoiceReady extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, newTaskTitle: ''};

    this.changeNewTask = this.changeNewTask.bind(this);
    this.submitNewTask = this.submitNewTask.bind(this);
  }
  
  handleClick = () => {
    this.setState(state => ({ clicked: true, newTaskTitle: ''}))
  }

  changeNewTask = (e) => {
    this.setState({ newTaskTitle: e.target.value })
  }

  submitNewTask = () => {
    if(this.state.newTaskTitle !== '') {
    this.props.addTasksReady(this.state.newTaskTitle);
    this.setState(state => ({ clicked: false, newTaskTitle: ''}))
    }
  }

  render () {
    const { clicked } = this.state;
    
    if (this.props.tasks.length !== 0) {
      if( clicked ) {
        return (
          <>
            <select
                className='task' 
                value={ clicked.newTaskTitle }
                id={ clicked.id } 
                onChange={ this.changeNewTask } 
                onKeyUp={ (e)=>{if (e.code === "Enter") { this.submitNewTask() }} }>
                  <option>Выберете задачу</option>
                  <ChooseTask tasks={this.props.tasks} />
            </select>
            <button 
                className="button disabled" 
                onClick={ this.submitNewTask } 
                style={{ backgroundColor: 'blue', color: 'white'}}
            >Submit</button>
          </>
        )
      }
    }
    // } else {
    //   this.setState(state => ({ clicked: false, newTaskTitle: ''}))
    // }

    return (
      <button className="button" onClick={this.handleClick}>+ Add card</button>
    )
  }
}

export default ButtonChoiceReady;