import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK } from '../constants';

export const addTask = (id, text, isCompleted, isEditMode) => ({
  type: ADD_TASK,
  id,
  text,
  isCompleted,
  isEditMode
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const editTask = (id, text, isEditMode) => ({
  type: EDIT_TASK,
  text,
  id,
  isEditMode
});