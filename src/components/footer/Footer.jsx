import React from 'react';
import '../App.css';

function Footer(props) {
  const date = new Date();
  let year = date.getFullYear()
  return (
    <>
      <div className="Footer">
        <div>
          Active tasks: {props.activeTasks} Finished tasks: {props.finishedTasks}
        </div>
        <div>
          Kanban board by NAME, {year}
        </div>
      </div>
    </>
  );
}

export default Footer;