import { INCREMENT, DECREMENT } from "./types"
import { createAction } from "@reduxjs/toolkit"

// export const addCounterAction = (number) => {
//     return{ type: INCREMENT, payload: number}

// } 



export const addCounterAction = createAction(INCREMENT)

export const decrementCounterAction = createAction(DECREMENT)