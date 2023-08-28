import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// create a slice 
interface CrudState {
  crud: any[]; 
}
export const crudSlice = createSlice({
  name: "crud",
  initialState: {
    crud: [], 
  } as CrudState,

  //  get All Data in backend
  reducers: {
    getData: (state, action: PayloadAction<any>) => {
      return state.crud = action.payload;
    },

    // Add Data in backend
    addData: (state, action) => {

    },

    // remove Data in backend
    removeData: (state, action) => {

    },

    // update Data in backend
    updateData: (state, action) => {

    }

  },

})

export const { getData, addData, removeData, updateData } = crudSlice.actions;
export default crudSlice.reducer;