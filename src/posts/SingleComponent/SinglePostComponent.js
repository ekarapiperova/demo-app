 import React, { Component } from "react";
import { connect } from "react-redux";
import  {fetchPosts}  from '../../redux/actions/index';
import Link from 'react'
export class Posts extends Component {
  constructor(props) {
    super(props);

     }
    
  
  render() {
    
      const id=this.props.match.params.id
     const post = this.props.posts.find(post => post.id == id )
    return (
      <ul>
       
        {        
        <li key={id}>
          {post.id}
        <h2>  {post.title}</h2>
         <p> {post.body}</p>
         <a href={`/editPost/${id}`} className="button">
          Edit Post
        </a>
        </li>
        
      }
        
     </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 5 )
  };
}

export default connect(
  mapStateToProps,

)(Posts);