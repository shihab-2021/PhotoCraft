import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// getting all blogs api called here
export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async () => {
    const response = await fetch("http://localhost:5000/services");
    const data = await response.json();
    console.log(data);
    return data;
    // const response = await axios.get("http://localhost:5000/services");
    // return response.data;
  }
);

type service = {};
type InitialState = {
  loading: boolean;
  services: service[];
  error: string;
};
const initialState: InitialState = {
  loading: false,
  services: [],
  error: "",
};

const servicesSlice = createSlice({
  name: "services",
  // type initialState: {
  //   services: string[],
  //   isLoading: boolean,
  //   error: string,
  // },
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchServices.fulfilled,
      (state, action: PayloadAction<service[]>) => {
        state.loading = false;
        state.services = action.payload;
        state.error = '';
      }
    );
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.loading = false;
      state.services = [];
      state.error = action.error.message || "Some thing went wrong";
    });
  },
});

export default servicesSlice.reducer;
