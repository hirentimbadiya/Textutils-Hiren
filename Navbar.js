import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.tital}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="/about">{props.Abouttext}</a>
        </li>    
      </ul>
      <div class="btn-group" role="group" aria-label="Basic mixed styles example">
        <strong><button type="button" onClick={props.redmode} class="btn btn-danger mx-1">Red Mode</button> </strong>
        <strong><button type="button" onClick={props.yellowmode} class="btn btn-warning mx-1">Yellow Mode</button></strong>
        <strong><button type="button" onClick={props.greenmode} class="btn btn-success mx-1" >Green Mode</button></strong>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-3`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Enable DarkMode</label>
      </div>
    </div>
  </div>
</nav>
    )
}

Navbar.propTypes = {
    title :PropTypes.string.isRequired,
    About : PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     tital : "TextUtils55" ,
//     About : "About"

// }