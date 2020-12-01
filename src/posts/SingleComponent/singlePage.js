import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../../components/header/header'
export const SinglePostPage = ({ match }) => {
  const {id} = match.params
  console.log(id);
  
  const post = useSelector(state =>   
    state.posts.find(post => post.id == id )
   
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <Header/>
      <article className="post">
        
      <h1>{post.id}</h1>
        <h2>{post.title}</h2>
        <p className="post-content">{post.body}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}