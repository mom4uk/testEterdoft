import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, editTask } from '../../actions/actionCreator';

import ToDoInput from '../../components/todo-input/todo-input';
import ToDoList from '../../components/todo-list/todo-list';


import './todo.css';

class ToDo extends Component {

  state = {
    taskText: ''
  }

handleInputChange = ({ target: { value } }) => {
  this.setState({
    taskText: value,
  })
}

editInputChange = ({ target: { valueTaskInList } }) => {
  this.setState({
    taskText: valueTaskInList
  })
}

addTask = ({ key }) => {
  const { taskText } = this.state;

  if (taskText.length > 2 && key === 'Enter') {
    const { addTask } = this.props;

    addTask((new Date()).getTime(), taskText, false);

    this.setState({
      taskText: '',
    })
  }
}

editTask = () => {
  const { valueTaskInList, taskText, id } = this.state;

  if (taskText.length > 2) {
    const { editTask } = this.props;

    editTask(id, valueTaskInList);

    this.setState({
      taskText: 'Изменение'
    })
  }
}

render() {
  const { taskText } = this.state;
  const { tasks, removeTask, completeTask, editTask } = this.props;
  const isTasksExist = tasks && tasks.length > 0;

  return (
    <div className="todo-wrapper">
      <ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
        {isTasksExist &&
          <ToDoList
          valueTaskInList ={taskText}
          onClick={this.editTask}
          onChange={this.editInputChange}
          editTask ={editTask}
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