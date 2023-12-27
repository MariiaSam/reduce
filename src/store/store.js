import { createStore } from 'redux';

export const reducer = (state, action) => {
  if (action.type === 'addCounte') {
    return {
      ...state,
      counter: action.payload,
    };
  } else if (action.type === 'createUsers') {
    return {
      ...state,
      users: action.payload,
    };
  }

  return state;
}; // функція відповідає за зміну STATE

export const store = createStore(reducer, {
  counter: 0,
  users: [],
  todo: [],
  user: [],
}); // { counter: 0, user: [] } - STAT E

 store.dispatch({ type: 'kdnvkd', payload: 100 }); //це метод у контексті Redux, який використовується для відправлення дій (actions) до Redux store. Redux - це популярна бібліотека для керування станом додатка в JavaScript-додатках, особливо тих, що побудовані на бібліотеці React.
store.dispatch({ type: 'createUsers', payload: [1, 2, 3, 4] });

console.log('store', store.getState());

// викликаємо dispatch, спрацьовує createStore, викликає (reducer,бере {counter: 0}), передає в   (state), весь обʼєкт з dispatch і передає в state другим параметром({ type: '', counter: 100}), а те що reducer поверне, перезапише в  (reducer, {counter: 0})
