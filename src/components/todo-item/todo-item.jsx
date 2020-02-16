import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';


const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask, onChange, onKeyPress, valueInputForChange }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      <input
        className="todo-input-item"
        placeholder="Click to edit task"
        onChange={onChange}
        valueInputForChange={valueInputForChange}
        onKeyPress={onKeyPress} 
        />
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
  completeTask: PropTypes.func,
  onKeyPress: PropTypes.func,
  onChange: PropTypes.func,
  valueInputForChange: PropTypes.string
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: '',
  completeTask: () => {},
  onKeyPress: () => {},
  onChange: () => {},
  valueInputForChange: ''
}

export default ToDoItem;