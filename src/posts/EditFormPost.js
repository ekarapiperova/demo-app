import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import store from '../redux/store'

import { postUpdated } from './postsSlice'

export const EditPostForm = ({ match }) => {
  const { id } = match.params

  const post = useSelector(state =>
    state.find(post => post.id == id)
  )
  console.log(post);

  const [title, setTitle] = useState(post.title)
  const [body, setContent] = useState(post.body)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && body) {
    
      dispatch(postUpdated({id:id, title: title, body }))
      history.push(`/posts/${id}`)
    }
  }


  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle"> Post Title: </label>
        
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}