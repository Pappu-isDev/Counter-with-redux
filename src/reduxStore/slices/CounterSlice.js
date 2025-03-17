import {createSlice} from '@reduxjs/toolkit';
export const CounterSlice = createSlice({
    initialState : {count : 0},
    name : 'counter',
    reducers :{
        increment : (state) => {
            state.count += 1;
        },
        decrement : (state) => {
            state.count -= 1;
        },
        incrementByAmount : (state,action) => {
            state.count += action.payload;
        },
        decrementByAmount : (state,action) => {
            satisfies.count -= action.payload;
        }
    }
})
 export const {increment ,decrement, incrementByAmount, decrementByAmount} = CounterSlice.actions;
 export default CounterSlice.reducer ;