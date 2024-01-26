import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import { authSlice } from './authSlice'
import { messageSlice } from './messageSlice'

export const store = configureStore({
  reducer: {
    menuSlice:menuSlice,
    auth:     authSlice.reducer,
    message:  messageSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch