import { match } from 'assert'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store'
//synchronous action creator
const fetchPostsSuccess = posts => ({
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts }
})
const fetchUpdateSuccess = post => ({
    type: 'UPDATE_POST',
    payload: { post}
})


/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchPosts =  () => {
    return async dispatch => {
        try {
            let posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            dispatch(fetchPostsSuccess(posts.data.splice(0, 5))) //store first five posts
        }
        catch(e){
            console.log(e)
        }
    }
}
export const fetchUpdatePosts =  (post) => {
    return async dispatch => { 
        try{
            dispatch(fetchUpdateSuccess(post))       
           
        }
        catch(e){
            console.log(e)
        }
    }
}