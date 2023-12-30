// import { useDispatch, useSelector } from "react-redux"
// import { addCounterAction } from "store/counter/actions"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction, removeTodoAction, updateTodoAction } from 'store/todoToolkit/actions';
import TodoList from 'components/TodoList/TodoList';
import FormCreateTodo from 'components/Form/FormCreateTodo';

const TodoPage = () => {
  const { todo } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const deleteTodo = (id) => {
    dispatch(removeTodoAction(id));
  };

  const updateTodo = (id) => {
    dispatch(updateTodoAction(id));
  };

  const createTodo  = (data) => {
    
dispatch(addTodoAction(data))
}
  return (
    <>
        <FormCreateTodo createTodo={createTodo} />
        {todo && <TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />}
    </>
)
};

export default TodoPage;


// const TodoPage = () => {

// const state =  useSelector((state) =>state)
// console.log(state)

// const dispatch = useDispatch ()

//    const  handlerClick = () => { 
//     dispatch(addCounterAction(100));
// }

// return <>

// <button onClick={handlerClick}>{state.counter.counter}</button></>
// }

// export default TodoPage  