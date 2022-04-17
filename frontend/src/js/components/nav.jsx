import React from "react";
import PropTypes from "prop-types"

import LoginStore from "../api/login";
export default class Nav extends React.Component {
    static propTypes;
    
    constructor(props) {
        super(props);
    }

    renderNavMenu() {
        if(this.props.user) {
            return (
                <ul className="navbar-nav flex-row ml-md-auto">
                    <li className="nav-item">
                        <span className="navbar-text dashboard-username">Hello {this.props.user}</span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={LoginStore.logout} href='/'>Logout</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About this project</a>
                    </li>
                </ul>
            )
        }

        return (
            <ul className="navbar-nav flex-row ml-md-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About this project</a>
                </li>
            </ul>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark navbar-container">
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <a href="/" className="navbar-brand nav-center">ResourceEDU</a>
                    {this.renderNavMenu()}
                </div>
            </nav>
        )
    }
}

Nav.propTypes = {
    user: PropTypes.string
}