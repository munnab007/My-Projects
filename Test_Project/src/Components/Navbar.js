import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item- ml-5"></li>
                    <Link to="/" className="nav-link"><i className="fa fa-arrow-left" ></i></Link>
                    <li className="nav-item- ml-5"></li>
                    <h5 to="/" className="nav-link" >Data Peace</h5>
                </ul>
            </nav>
        );
    }
}