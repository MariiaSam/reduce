import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
  secretKey: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,

  reducers: {
    addTodoAction: {
      prepare: (data) => {
        const newTodo = {
          ...data,
          completed: false,
          id: nanoid(),
        };
        return { payload: newTodo };
      },
      reducer: (state, {payload}) => {
        state.todo.push(payload);
      },
    },
    
    removeTodoAction: (state, action) => {
      state.todo = state.todo.filter(el => el.id !== action.payload);
    },

    updateTodoAction: (state, action) => {
      state.todo = state.todo.map(el =>
        el.id === action.payload ? { ...el, completed: !el.completed } : el
      );
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodoAction, removeTodoAction, updateTodoAction } = todoSlice.actions;
