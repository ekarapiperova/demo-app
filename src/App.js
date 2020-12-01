import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { EditPostForm } from './posts/EditForm/EditFormPost';
import {SinglePostPage} from './posts/SingleComponent/singlePage'
import { PostsList } from './posts/Home/PostsList'
import PostsComponent from './posts/Home/PostsComponent'

function App() {
  return (

    <Router>
     
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={PostsComponent} 
            
          />
                              
           <Route exact path="/posts/:id" component={SinglePostPage} />
           <Route  path="/editPost/:id" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
        
      </div>
    </Router>
  )
}
export default App;