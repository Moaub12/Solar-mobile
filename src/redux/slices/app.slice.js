/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'


// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  
  loggedIn: false,
  firstTime:true,
  aboutBody:"SunWise is a company providing solar pannels sytem services.We use AI technology to make the user experience better ",
  name:{},
  username:{},
  token:''
  
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.username=payload.username
      state.token=payload.token
    },
    saveMe: (state, { payload }) => {
      // console.log('------me saved', { me: payload.me })
      state.me = payload.me
    },
    firstLog: (state, { payload }) => {
      // console.log('------me saved', { me: payload.me })
      state.firstTime = payload.firstTime
    },
    setAboutBody: (state, { payload }) => {
      // console.log('------me saved', { me: payload.me })
      state.aboutBody = payload.aboutBody
    },
  },
})

export const { action } = appSlice
export const { authenticate, saveMe,firstLog,setAboutBody} = appSlice.actions

export default appSlice.reducer
