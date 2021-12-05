import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
      return (
            <div className="nav-container">
                  <div className = "left-bar">
                  <div>
                        <Link to="/">back icon</Link>
                  </div>
                  <div>left</div>
                  <div>left</div>
                  </div>
      
                  <div className="right-bar">
                  <div>right</div>
                  <div>icon</div>
                  </div>
            </div>
      )
}
