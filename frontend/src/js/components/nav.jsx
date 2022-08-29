import React from "react";
import PropTypes from "prop-types"

import AdminStore from "../api/user";
import logo from "../../static/logo.png"
import gear from "../../static/icons/gear.svg"
export default class Nav extends React.Component {
    static propTypes;
    
    constructor(props) {
        super(props);
    }

    renderNavMenu() {
        return (
            <ul className="navbar-nav ml-md-auto nav-menu-container">
                {this.props.user 
                    ?   <li className="nav-item">
                            <span className="navbar-text dashboard-username">Hello {this.props.user}</span>
                        </li>
                    : ""
                }
                {this.props.user 
                    ?   <li className="nav-item dropdown">
                            <img className="nav-settings-icon dropdown-toggle" type="button" id="drop" data-toggle="dropdown" src={gear} alt="gear" />
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" href="/">Home</a>
                                <a className="dropdown-item" href="/dashboard">Dashboard</a>
                                <a className="dropdown-item" href="/profile">Profile</a>
                                <a className="dropdown-item" onClick={AdminStore.logout} href='/'>Logout</a>
                            </div>
                        </li>
                    :   <>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </>
                }
            </ul>
        )
    }

    render() {
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark navbar-container">
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <div className="nav-center-logo">
                        <img className="nav-main-logo" src={logo} alt="logo" />
                        <a href="/" className="navbar-brand">ResourceEDU</a>
                    </div>
                    {this.renderNavMenu()}
                </div>
            </nav>
        )
    }
}

Nav.propTypes = {
    user: PropTypes.string
}