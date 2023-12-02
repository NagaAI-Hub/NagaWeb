import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


interface Limit {
  free: [number, string][];
  paid: [number, string][];
}

interface DataItem {
  id: string;
  object: string;
  free: Limit[];
  paid: Limit[];
}

interface LimitsState {
  limits: DataItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LimitsState = {
  limits: [],
  status: 'idle',
  error: null
};

// Async thunk for fetching data from the new endpoint
export const fetchLimits = createAsyncThunk(
  'limits/fetchLimits',
  async () => {
    const response = await fetch('https://api.naga.ac/v1/limits', { cache: 'force-cache' });
    const data = await response.json();
    return data.data; // Extract the data array from the response
  }
);

export const limitsSlice = createSlice({
  name: 'limits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLimits.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLimits.fulfilled, (state, action: PayloadAction<DataItem[]>) => {
        state.status = 'succeeded';
        state.limits = action.payload;
      })
      .addCase(fetchLimits.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch models';
      });
  }
});

export default limitsSlice.reducer;
