
const initialState ={
counter:  0
}

export const reducerCounter =  (state=initialState, action) => {
    if (action.type === 'increment') {
      return {
        ...state,
        counter: state.counter + action.payload
    }
  }
  else if(action.type === 'decrement') {
      return {
      ...state,
      counter: state.counter - action.payload
      }

    }
      return state
  }