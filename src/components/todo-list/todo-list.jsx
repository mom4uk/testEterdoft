import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/todo-item';

import './todo-list.css';

const ToDoList = ({ tasksList, removeTask, completeTask, onChange, valueInputForChange, onKeyPress }) => (
  <ul className="todo-list">
    {tasksList.map(({ id, text, isCompleted }) => (
      <ToDoItem
        valueInputForChange={valueInputForChange}
        onChange={onChange}
        onKeyPress={onKeyPress}
        completeTask={completeTask} 
        removeTask={removeTask} 
        id={id} 
        key={id}
        text={text}
        isCompleted={isCompleted}
        />
    ))}
  </ul>
);

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  editTask: PropTypes.func,
  valueInputForChange: PropTypes.string
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  editTask: () => {},
  valueInputForChange: ''
}

export default ToDoList;