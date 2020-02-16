import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, editTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';


import './todo.css';

class ToDo extends Component {

  state = {
    taskText: '',
    editTaskText: ''
  }

handleInputChange = ({ target: { value } }) => {
  this.setState({
    taskText: value,
  })
}

editInputChange = ({ target: { valueInputForChange } }) => {
  this.setState({
    taskText: valueInputForChange
  })
}

addTask = ({ key }) => {
  const { taskText } = this.state;
console.log(taskText)
  if (taskText.length > 2 && key === 'Enter') {
    const { addTask } = this.props;

    addTask((new Date()).getTime(), taskText, false);

    this.setState({
      taskText: '',
    })
  }
}

editTask = ({ key }, id) => {
  const { editTaskText } = this.state;
  if (editTaskText.length > 0 && key === 'Enter') {
    const { editTask } = this.props;

    editTask(id, editTaskText);

    this.setState({
      editTaskText: ''
    })
  }
}

render() {
  const { taskText, editTaskText } = this.state;
  const { tasks, removeTask, completeTask} = this.props;
  const isTasksExist = tasks && tasks.length > 0;
  return (
    <div className="todo-wrapper">
      <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist &&
          <ToDoList
          valueInputForChange={editTaskText}
          onKeyPress={this.editTask}
          onChange={this.editInputChange}
          tasksList={tasks}
          removeTask={removeTask}
          completeTask={completeTask}
          />}
      </div>
    );
  }
}

export default connect(state => ({
  tasks: state.tasks,
}), { addTask, removeTask, completeTask, editTask })(ToDo);