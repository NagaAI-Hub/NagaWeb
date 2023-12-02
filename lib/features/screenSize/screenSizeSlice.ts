// features/screenSize/screenSizeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScreenSizeState {
  isMobile: boolean;
}

const initialState: ScreenSizeState = {
  isMobile: false,
};

const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    setMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setMobile } = screenSizeSlice.actions;
export default screenSizeSlice.reducer;
