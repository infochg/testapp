import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export type NotificationsType = {
  error: any
  info: any
}

const initialState: NotificationsType = {
  error: null,
  info: null,
}

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setErrorNotification: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      toast.error(action.payload)
    },
    setInfoNotification: (state, action: PayloadAction<string>) => {
      state.info = action.payload
      toast.info(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setErrorNotification, setInfoNotification } = notificationsSlice.actions

export default notificationsSlice.reducer
