import { createSlice } from '@reduxjs/toolkit'

const initialFilterState = {
  middlePage: null,
}

const middlePageSlice = createSlice({
  name: 'setPage',
  initialState: initialFilterState,
  reducers: {
    setPage(state, action) {
      state.middlePage = action.payload
    },
  },
})

export const productAction = middlePageSlice.actions

export default middlePageSlice.reducer
