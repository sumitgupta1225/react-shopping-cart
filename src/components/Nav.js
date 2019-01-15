import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>(
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <Link className='navbar-brand' to='/'>Home</Link>
    
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <Link className='nav-link' to='/shopping-cart'>Shopping Cart</Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/contact-us'>Contact Us</Link>
      </li>
    </ul>
  </nav>
)

export default Nav