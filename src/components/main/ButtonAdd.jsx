import React from 'react';
import '../App.css';

class ButtonAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false, newTaskTitle: '' };

    this.changeNewTask = this.changeNewTask.bind(this);
    this.submitNewTask = this.submitNewTask.bind(this);
  }
  
  handleClick = () => {
    this.setState(state => ({ clicked: true, newTaskTitle: '' }))
  }

  changeNewTask = (e) => {
    this.setState({ newTaskTitle: e.target.value });
  }

  submitNewTask = () => {
    if(this.state.newTaskTitle.trim() !== '') {
    this.props.addTasksBacklog(this.state.newTaskTitle.trim());
    this.setState(state => ({ clicked: false, newTaskTitle: '' }))
    }
  }

  render () {
    const { clicked } = this.state;
    
    if( clicked ) {
      return (
        <>
          <input
              className='task' 
              value={ clicked.newTaskTitle } 
              onChange={ this.changeNewTask } 
              onKeyUp={ (e)=>{if (e.code === "Enter") { this.submitNewTask() }} }>
          </input>
          <button 
              className="button" 
              onClick={ this.submitNewTask } 
              style={{ backgroundColor: 'blue', color: 'white'}}
          >Submit</button>
        </>
      )
    }

    return (
      <button className="button" onClick={this.handleClick}>+ Add card</button>
    )
  }
}

export default ButtonAdd;