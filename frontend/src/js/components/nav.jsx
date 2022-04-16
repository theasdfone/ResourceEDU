import React from "react";
export default class Nav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand bg-dark navbar-dark navbar-container">
                <a href="/" className="navbar-brand nav-center">ResourceEDU</a>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav flex-row ml-md-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About this project</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}