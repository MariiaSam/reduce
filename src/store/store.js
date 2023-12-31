// import { combineReducers } from 'redux'
// import { reducerCounter } from './counter/reducerCounter'
import { reducerCounter } from './counterToolkit/reducerCounter';
import { todoReducer } from './todoSlice/sliceTodo.js';
// import { reducerTodo } from './todoToolkit/reducerTodo'
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const reducer = ({
// 	counter: reducerCounter,
// 	todo: reducerTodo, 
// })

const persistConfig = {
  key: 'todo',
  storage,
  whiteList:['todo'],
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

const reducer = {
  counter: reducerCounter,
  todo: persistedReducer,
};

export const store = configureStore({ reducer });
export const persistor = persistStore(store);

// import { createStore } from 'redux';

// export const reducer = (state, action) => {
//   if (action.type === 'addCounte') {
//     return {
//       ...state,
//       counter: action.payload,
//     };
//   } else if (action.type === 'createUsers') {
//     return {
//       ...state,
//       users: action.payload,
//     };

//   }

//   return state;
// }; // функція відповідає за зміну STATE

// export const store = createStore(reducer, { todo: [],
// }); // { counter: 0, user: [] } - STAT E

// store.dispatch({ type: 'kdnvkd', payload: 100 }); //це метод у контексті Redux, який використовується для відправлення дій (actions) до Redux store. Redux - це популярна бібліотека для керування станом додатка в JavaScript-додатках, особливо тих, що побудовані на бібліотеці React.
// store.dispatch({ type: 'createUsers', payload: [1, 2, 3, 4] });

// console.log('store', store.getState());

// викликаємо dispatch, спрацьовує createStore, викликає (reducer,бере {counter: 0}), передає в   (state), весь обʼєкт з dispatch і передає в state другим параметром({ type: '', counter: 100}), а те що reducer поверне, перезапише в  (reducer, {counter: 0})
