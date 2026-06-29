import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    text: '',
  },
  reducers: {
    setSearchText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { setSearchText } = searchSlice.actions;
export const selectSearchText = (state) => state.search.text;

export default searchSlice.reducer;
