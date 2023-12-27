import { useDispatch, useSelector } from "react-redux"

const TodoPage = () => {

//    const state =  useSelector((state) =>state)
//    console.log('state', state)

const {counter} =  useSelector((state) =>state)

const dispatch = useDispatch ()

   const  handlerClick = () => {
    dispatch({ type: 'addCounter', payload: 100});
}


return <>

<button onClick={handlerClick}>{counter}</button></>
}

export default TodoPage