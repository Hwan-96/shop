import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({ //useState 역할
  name: 'user', //state 이름
  initialState : 'kim', // state 값
})

let 재고 = createSlice({
  name : 'stock',
  initialState : [10,20,30]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    재고 : 재고.reducer
  }
}) 


// [
//   {id : 0, name : 'White and Black', count : 2},
//   {id : 2, name : 'Grey Yordan', count : 1}
// ] 