import React from 'react';
import PropTypes, { string } from 'prop-types';

import './todo-item.css';
import ToDoInput from '../todo-input/todo-input';

const ToDoItem = ({ text, isCompleted }) => (
  <li className="todo-item">
    <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
}
ToDoItem.default = {
  text: '',
  isCompleted: false,
}
export default ToDoItem;