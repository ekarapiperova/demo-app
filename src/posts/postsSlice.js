import { createSlice } from '@reduxjs/toolkit'
import store from '../redux/store/'


const initialState = {
    posts: store,
    status: 'idle',
    error: null
  }

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postUpdated(state, action) {
          console.log('store');
        const { id, title, body } = action.payload
        const existingPost = state.find(post => post.id == id)
        if (existingPost) {
          existingPost.title = title
          existingPost.body = body
        }
      }
    }
  })
  
  export const {postUpdated } = postsSlice.actions
  
  export default postsSlice.reducer