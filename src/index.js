import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchPosts} from './redux/actions'
//import { PostsList } from './posts/PostsList';
import App from './App';

//Dispatch the fetchPosts() before our root component renders
store.dispatch(fetchPosts())


ReactDOM.render(
    <Provider store={ store }>
           <App/>
    </Provider>, document.getElementById('root')
);
