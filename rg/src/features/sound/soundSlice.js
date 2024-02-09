import { createSlice } from '@reduxjs/toolkit';

export const soundSlice = createSlice({
  name: 'sound',
  initialState: {
    muted: true,
  },
  reducers: {
    toggleMute: (state) => {
      state.muted = !state.muted;
    },
  }
});

export const { toggleMute } = soundSlice.actions;
export default soundSlice.reducer;
