import { createSlice } from '@reduxjs/toolkit'


export interface State {
    isSideMenuOpen: boolean
   
}

const initialState: State = {
    isSideMenuOpen: false,
    
}

export const menuSlice = createSlice({
  name: 'menuSlice',
  initialState,
  reducers: {
    changeToogleMenu: (state) => {
      
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const {  changeToogleMenu } = menuSlice.actions

export default menuSlice.reducer