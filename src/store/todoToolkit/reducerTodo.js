import { createReducer } from '@reduxjs/toolkit';
import { addTodoAction, removeTodoAction, updateTodoAction} from './actions'


const initialState = {
  todo:[]
};

export const reducerTodo = createReducer(initialState, builder => {
  builder
    .addCase(addTodoAction, (state, { payload }) => {
      // return{
      // ...state,
      // todo: [...state, action.payload]
      // }
      state.todo.push(payload); // return забороняється використовувати
      // state.values = action.payload.values
      // state.items = [123, 123]
      // обробка для дії addTodoAction
    })
    .addCase(removeTodoAction, (state, { payload }) => {
      state.todo = state.todo.filter(el => el.id !== payload);
    })
    .addCase(updateTodoAction, (state, { payload }) => {
      state.todo = state.todo.map(el =>
        el.id === payload ? { ...el, completed: !el.completed } : el
      );
    });
});

//immer
