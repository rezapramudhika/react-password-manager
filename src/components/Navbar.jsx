import React, { Component } from 'react';

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
                        <a className="navbar-brand" href="/"> React Password Manager </a>
                    </div>
                    <div className="collapse navbar-collapse navbar-ex1-collapse">
                        <ul className="nav navbar-nav navbar-left">
                            <li><a href="/">Password List</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/">Login / Register</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Navbar;