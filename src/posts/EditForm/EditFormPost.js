import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import store from '../../redux/store'
import { fetchUpdatePosts } from '../../redux/actions'
//import { postUpdated } from './postsSlice'
import Header from '../../components/header/header'
import styles from './edit-form.module.css'
import { Footer } from '../../components/footer'
export const EditPostForm = ({ match }) => {
  const { id } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id == id)
   
  )
  
  const [title, setTitle] = useState(post.title)
  const [body, setContent] = useState(post.body)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)


  const onSavePostClicked = () => {
    if (title && body) { 
      // console.log(id,title,body);  
       let post={id,title,body}
      // console.log(post);
     
      dispatch(fetchUpdatePosts(post))
      history.push(`/`)
    }
  }

<Header/>
  return (    
    <section>
      <h2>Edit Post</h2>
      <form className={styles.forma}>
        <label htmlFor="postTitle"> Post Title: </label>
        
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <br></br>
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