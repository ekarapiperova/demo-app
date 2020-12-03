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
import Posts from './posts/Home/PostsComponent'
import  Post  from './posts/SingleComponent/SinglePostComponent';
import Header from './components/header/header'
import Footer from './components/footer'


function App() {
  return (

    <Router>
     <Header/>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            component={PostsList} 
            
          />
                              
           <Route exact path="/posts/:id" component={SinglePostPage} />
           <Route  path="/editPost/:id" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
        
      </div>
        <Footer/>
    </Router>
  
  )
}
export default App;