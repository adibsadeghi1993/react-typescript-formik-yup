import React from 'react'
import { Link } from 'react-router-dom'



const Layout = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Kordestan</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
               <Link className="nav-link" to="/">home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/">createcity</Link>
              </li>
             
            </ul>
           
          </div>
        </div>
      </nav>
    )
}

export default Layout
