import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import strainService from './strainService'

const initialState = {
  strains: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create a new strain
export const createStrain = createAsyncThunk(
  'strains/create',
  async (strainData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await strainService.createStrain(strainData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get User Strains
export const getStrains = createAsyncThunk(
  'strains/getUserStrains',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await strainService.getStrains(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user strain
export const deleteStrain = createAsyncThunk(
  'strains/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await strainService.deleteStrain(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const strainSlice = createSlice({
  name: 'strain',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStrain.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createStrain.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.strains.push(action.payload)
      })
      .addCase(createStrain.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getStrains.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStrains.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.strains = action.payload
      })
      .addCase(getStrains.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteStrain.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteStrain.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.strains = state.strains.filter(
          (strain) => strain._id !== action.payload.id
        )
      })
      .addCase(deleteStrain.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

/*

export const strainSlice = createSlice({
  name: 'strain',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createStrain.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createStrain.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.strains.push(action.payload)
      })
      .addCase(createStrain.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getStrains.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getStrains.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.strains = action.payload
      })
      .addCase(getStrains.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteStrain.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteStrain.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.strains = state.strains.filter(
          (strain) => strain._id !== action.payload.id
        )
      })
      .addCase(deleteStrain.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

*/

export const { reset } = strainSlice.actions
export default strainSlice.reducer
