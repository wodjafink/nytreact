
import React from 'react'
import { Link, Route } from 'react-router-dom'
import AuthInterface from '../../utils/AuthInterface'

const Nav = () => (
  <nav className='navbar navbar-inverse navbar-top'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <Link to='/' className='navbar-brand'>
          New York Times Article Scrubber
        </Link>
        <p>Search for and annotate articles of interest!</p>
      </div>
      {
        AuthInterface.isLoggedIn() ? (
          <Route render={ (props) => (
              
            <div
              className='navbar-brand pull-right'
              style={{ cursor: 'pointer' }}
              onClick={ () => AuthInterface.logout(props.history) }
            >
              Logout, { AuthInterface.getUser().username }
            </div>

          )} />
        ) : null
      }
    </div>
  </nav>
)

export default Nav
