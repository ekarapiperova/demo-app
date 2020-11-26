import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { EditPostForm } from './posts/EditForm/EditFormPost';

import { PostsList } from './posts/Home/PostsList'
import { SinglePostPage } from './posts/SingleComponent/singlePage';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
           <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <SinglePostPage />
              </React.Fragment>
            )}
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