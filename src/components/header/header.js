import React from 'react';
import { Link } from 'react-router-dom'
import styles from './header.module.css'
class Header extends React.Component {
    render() {
       return (
          <div className={styles.diva}>
             <Link className={styles.linkk} to='/'>All JJposts</Link>
          </div>
       );
    }
 }

 export default Header;