import React from 'react';
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
       return (
          <div>
                           
             <Link to='/'>All posts</Link>
          </div>
       );
    }
 }

 export default Header;