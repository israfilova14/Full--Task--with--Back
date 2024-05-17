import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"


const getAllProducts = createAsyncThunk(
    async () => {
      const response = await axios.get("http://localhost:5000/store")
      return response.data
    },
  )
export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    value: []
  },

  

  reducers: {
    increment: state => {
  
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

 
export const {} = counterSlice.actions

export default productsSlice.reducer