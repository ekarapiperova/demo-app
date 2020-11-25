import { createSlice } from '@reduxjs/toolkit'
import store from '../redux/store/'


const initialState = {
    posts: store,
  }

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      },
      postUpdated(state, action) {
          console.log('object');
        const { id, title, body } = action.payload
        const existingPost = state.find(post => post.id === id)
        if (existingPost) {
          existingPost.title = title
          existingPost.body = body
        }
      }
    }
  })
  
  export const { postAdded, postUpdated } = postsSlice.actions
  
  export default postsSlice.reducer