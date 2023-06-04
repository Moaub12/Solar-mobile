/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
  firstTime:true,
  aboutBody:"Solar AI is a company providing solar pannels sytem services.We use AI technology to make the user experience better ",
  me: {},
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
      state.checked = payload.checked
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
