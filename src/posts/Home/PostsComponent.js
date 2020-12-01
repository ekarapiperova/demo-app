import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/index";
import Link from 'react'
export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  
  render() {
    
    return (
      <ul>
        {this.props.posts.map(el => 
          
        <li key={el.id}>
          {el.id}:{el.title} 
       {el.body.substring(0, 100)}
       <a href={`/posts/${el.id}`}>
        View Post
      </a>
        </li>
        
      )}
        
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
  { fetchPosts }
)(Post);