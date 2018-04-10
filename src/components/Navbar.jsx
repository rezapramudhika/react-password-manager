import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">React Password Manager</Link>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li><Link to="/password-list">Password list</Link></li>
                        </ul>
                        {/* <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Login</a></li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;