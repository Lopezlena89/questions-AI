import { configureStore } from '@reduxjs/toolkit'
import {idSelect} from './IdSelect'
import { authSlice } from './authSlice'
import { messageSlice } from './messageSlice'
import { groupMessage } from './groupMessageSlice'

export const store = configureStore({
  reducer: {
    idSelect: idSelect.reducer,
    auth:     authSlice.reducer,
    message:  messageSlice.reducer,
    groupMessage:  groupMessage.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch