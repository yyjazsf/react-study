/**
 *
 */
import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const store = {
  todos: [],
  editing: false,
};

class TodoStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(TodoConstants.ADD_TODO, cb);
  }

  removeChangeListener(cb) {
    this.removeChangeListener(TodoConstants.ADD_TODO, cb);
  }

  getTodos() {
    return store.todos;
  }
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((action) => {
  switch (action.type) {
    case TodoConstants.ADD_TODO:
      store.todos.push({
        text: action.payload.text,
      });
      TodoStore.emit(TodoConstants.ADD_TODO);
      break;
    default:
      return true;
  }
  return true;
});

export default TodoStore;
