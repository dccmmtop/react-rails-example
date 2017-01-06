import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export class Header extends Component {
  render() {
    return (
      <div id="header" className="navbar navbar-light bg-faded">
        <div className="container">
          <ul className="nav navbar-nav nav-main">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/topics">Topics</Link></li>
          </ul>
          <ul className="nav navbar-nav float-xs-right">
            <li className="nav-item"><Link className="nav-link" to="/sign_up">Sign Up</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}