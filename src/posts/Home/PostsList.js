import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './home-page.module.css';
export const PostsList = () => {
  const posts = useSelector(state => state.posts)
  
  const renderedPosts = posts.map(post => (
      
    <article className={styles.post} key={post.id}>
    
      <h3>{post.id}:{post.title}</h3>
      <p className="post-content">{post.body.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className={styles.buttonlink}>
        View Post
      </Link>
    </article>
  ))

  return (
    <section className={styles.posts_list}>
      <h2>Posts</h2>
     
      {renderedPosts}
    </section>
  )
}