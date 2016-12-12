/**
 * Created by yyj on 12/12/2016.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const TodoActions = {
  addTodo(text) {
    AppDispatcher.handleAction({
      type: TodoConstants.ADD_TODO,
      payload: {
        text,
      },
    });
  },
};

export default TodoActions;
