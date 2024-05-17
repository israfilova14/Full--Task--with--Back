import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState ={
  products: [],
  basket: []
}
 
 export const getAllData = createAsyncThunk( "products", async () => {
 
      const response = await axios.get("http://localhost:5000/store")
      console.log(response.data);
      return response.data
    },
  )

export const productsSlice = createSlice({
  name: 'products',
 initialState,
  reducers: {
    addToBasket: (state, action)=>{
      state.basket.push(action.payload)
    }
  },
  extraReducers: (builder) =>{
   builder.addCase(getAllData.fulfilled, (state, action) =>{
       state.products = action.payload
   })
  }

})

export const {addToBasket} = productsSlice.actions

export default productsSlice.reducer