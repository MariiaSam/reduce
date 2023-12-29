import { createReducer } from '@reduxjs/toolkit';
// import { DECREMENT, INCREMENT } from './types';
import { addCounterAction, decrementCounterAction } from './actions';

const initialState = {
  counter: 0,
};

// export const reducerCounter =  (state=initialState, action) => {
//     if (action.type === 'increment') {
//       return {
//         ...state,
//         counter: state.counter + action.payload
//     }
//   }
//   else if(action.type === 'decrement') {
//       return {
//       ...state,
//       counter: state.counter - action.payload
//       }

//     }
//       return state
//   }


export const reducerCounter = createReducer(initialState, builder => {
  builder
    .addCase(addCounterAction, (state, action) => {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    })
    .addCase(decrementCounterAction, (state, action) => {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    });
});
