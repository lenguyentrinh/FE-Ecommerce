import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupThunk, loginThunk } from "./authThunk";

interface User{
  id?: number;
  userName?: String;
  email?: String;
}

interface AuthState {
  signupLoading: boolean;
  loginLoading: boolean;
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  signupLoading: false,
  loginLoading: false,
  user: null,
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=>{
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      if(typeof window !== "undefined"){
        localStorage.removeItem("token");
      }
    },
    setAuth:(state, action: PayloadAction<{user: User, token: string}>) =>{
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      if(typeof window !== "undefined"){
        localStorage.setItem("token", action.payload.token);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // SIGNUP
      .addCase(signupThunk.pending, (state) => {
        state.signupLoading = true;
      })
      .addCase(signupThunk.fulfilled, (state) => {
        state.signupLoading = false;
      })
      .addCase(signupThunk.rejected, (state) => {
        state.signupLoading = false;
      })

      // LOGIN
      .addCase(loginThunk.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        if(typeof window !== "undefined"){
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loginLoading = false;
      });
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
