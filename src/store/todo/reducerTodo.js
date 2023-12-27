

const initialState ={
    todo:  null
    }

export const reducerTodo = (state =  initialState, action) => {
  if (action.type === 'addTodo') {
    return {
      ...state,
     todo: [...state.todo, action.payload]
    }
}
else if(action.type === 'removeTodo') {
    return {
    ...state,
    todo: state.todo.filter(el=> el.id !==action.payload)
    }
}

  return state;
}; // функція відповідає за зміну STATE
