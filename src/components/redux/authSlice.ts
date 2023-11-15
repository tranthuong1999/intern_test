import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type AuthState = {
  isLogin: boolean;
  user:any
}

const initialState: AuthState = {
  isLogin: false,
  user : null,

}

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    }
  },
  extraReducers: {},
});

export const { setIsLogin,setUser} = authSlice.actions;

export default authSlice.reducer;