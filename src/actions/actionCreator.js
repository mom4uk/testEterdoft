import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK } from '../constants';

export const addTask = (id, text, isCompleted) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const editTask = (id, text) => ({
  type: EDIT_TASK,
  text,
  id
});