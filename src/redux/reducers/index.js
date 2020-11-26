const INITIAL_STATE = {
    posts: []
}

const posts = (state = INITIAL_STATE , action) => {

    switch(action.type) {
        case 'FETCH_POSTS_SUCCESS':
            return {...state, posts: action.payload.posts}
        case 'UPDATE_POST':
            let posts = state.posts;
            let editedPost = action.payload.post;
            //console.log(editedPost);
            let postIndex = posts.findIndex(x=>x.id == editedPost.id);
            //posts.splice(postIndex,1);
            posts.splice(postIndex,1,editedPost);
            //posts.push(editedPost);
            
            return {...state, posts: posts}
        default:
            return state
    }
}

export default posts