import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  uid:''
}

export const UserSlice = createSlice({
  name: 'UserSlicedetail',
  initialState,
  reducers: {
    SetUserDetail: (state, action) => {
        
      state.email= action.payload.email
       state.uid= action.payload.uid
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetUserDetail } = UserSlice.actions

export default UserSlice.reducer