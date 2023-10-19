import {configureStore, createSlice} from '@reduxjs/toolkit'

// by default it takes an empty object
export const store = configureStore({});

export const todoSlice = createSlice({
 name: 'todo',
 initialState,
 reducers: {
 }
})