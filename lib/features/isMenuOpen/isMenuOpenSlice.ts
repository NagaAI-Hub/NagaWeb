// isMenuOpenSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsMenuOpenState {
  value: boolean;
}

const initialState: IsMenuOpenState = {
  value: false,
};

export const isMenuOpenSlice = createSlice({
  name: 'isMenuOpen',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.value = !state.value;
    },
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen } = isMenuOpenSlice.actions;

export default isMenuOpenSlice.reducer;