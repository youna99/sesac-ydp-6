import { createSlice } from '@reduxjs/toolkit';

const bankSlice = createSlice({
  name: 'bank',
  initialState: { number: 0 },
  reducers: {
    bankPlus: (state, action) => {
      state.number += action.payload;
    },
    bankMinus: (state, action) => {
      state.number -= action.payload;
    },
  },
});

export const { bankPlus, bankMinus } = bankSlice.actions;
export default bankSlice.reducer;
