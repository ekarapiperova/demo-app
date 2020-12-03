import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/index";
import Link from 'react'
import style from './index.module.css'
export class Footer extends Component {
  constructor(props) {
    super(props);
  }

   render() {
    
    return (
        <div className={style.div}>
      <ul>
        {this.props.posts.map(el => 
          
        <li className={style.comp} key={el.id}>

       <a href={`/posts/${el.id}`}>
       {el.id}:{el.title.substring(0, 10)}
      </a>
        </li>
        
      )}
        
     </ul>
     </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts.slice(0, 3 )
  };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Footer);