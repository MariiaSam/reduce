import { useDispatch, useSelector } from "react-redux"
import { addCounterAction } from "store/counter/actions"



const TodoPage = () => {

const state =  useSelector((state) =>state)
console.log(state)

const dispatch = useDispatch ()

   const  handlerClick = () => { 
    dispatch(addCounterAction(100));
}

return <>

<button onClick={handlerClick}>{0}</button></>
}

export default TodoPage 