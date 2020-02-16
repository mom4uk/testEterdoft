import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';


const ToDoItem = ({ text, isCompleted, editTask, removeTask, id, completeTask, onChange, onKeyPress }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
      <input onClick={() => editTask(id)}
        className="todo-input-item"
        placeholder="Click to edit task"
        valueTaskInList={text}
        onChange={onChange}
        onKeyPress={onKeyPress} 
        />
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);
/*
onKeyPress={onKeyPress} onChange={onChange} editMode={editMode}
if (this.state.isEditMode) {
  <input value={text} onChange={() => {}}> // добавить флаг на isEditMode?
} else {
  <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
}
*/
ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
  completeTask: PropTypes.func,
  onDoubleClick: PropTypes.func,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  isEditMode: false,
  removeTask: () => {},
  id: '',
  completeTask: () => {},
}

export default ToDoItem;