import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import collectionReducer from './collectionSlice'
import notificationsReducer from './notificationsSlice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    collection: collectionReducer,
    notifications: notificationsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
