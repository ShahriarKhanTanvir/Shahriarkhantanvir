import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJerseys = createAsyncThunk('jersey/fetchJerseys', async () => {
  const response = await axios.get('/api/jerseys');
  return response.data;
});

const jerseySlice = createSlice({
  name: 'jersey',
  initialState: {
    jerseys: [],
    status: 'idle'
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJerseys.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchJerseys.fulfilled, (state, action) => {
        state.jerseys = action.payload;
        state.status = 'succeeded';
      });
  }
});

export default jerseySlice.reducer;
