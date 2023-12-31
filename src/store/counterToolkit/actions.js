import { createAction } from "@reduxjs/toolkit"

// export const addCounterAction = (number) => {
//     return{ type: INCREMENT, payload: number}

// } 



export const addCounterAction = createAction('counter/increment')

export const decrementCounterAction = createAction('counter/decrement')