import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// import PropTypes from 'prop-types'
// /cjs/react-router-dom.min

export class NavBar extends Component {

  render() {
    return (

    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">EatYourOreo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">Business</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/politics">GeoPolitics</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/health">Health</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Country
            </a>
          <ul className="dropdown-menu mx-5" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">US</a></li>
            <li><a className="dropdown-item" href="/">UK</a></li>
            <li><a className="dropdown-item" href="/">Europe</a></li>
            <li><a className="dropdown-item" href="/">India</a></li>
            <li><a className="dropdown-item" href="/">Russia</a></li>
            <li><a className="dropdown-item" href="/">Ocenia</a></li>
          </ul>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    
    )
  }
}

export default NavBar

