// features/item/modelSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface UnitCosts {
  input?: string;
  output?: string;
  image?: number;
}

interface Model {
  id: string;
  object: string;
  owned_by?: string;
  limit?: string;
  unit_costs?: UnitCosts;
  allowed_for?: string[];
  max_images?: number;
  multiple_of?: number;
  unit_cost?: string;
  proxy_to?: string;
}

interface ModelsState {
  models: Model[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ModelsState = {
  models: [],
  status: 'idle',
  error: null
};

// Async thunk for fetching data
export const fetchModels = createAsyncThunk(
  'models/fetchModels',
  async () => {
    const response = await fetch('https://api.naga.ac/v1/models', { cache: 'force-cache' });
    const data = await response.json();
    return data.data; // Extract the data array from the response
  }
);

export const modelsSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchModels.fulfilled, (state, action: PayloadAction<Model[]>) => {
        state.status = 'succeeded';
        state.models = action.payload;
      })
      .addCase(fetchModels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch models';
      });
  }
});

export default modelsSlice.reducer;