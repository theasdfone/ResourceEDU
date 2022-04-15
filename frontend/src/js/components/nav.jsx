import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <nav className="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
                <p className="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEDU</p>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav flex-row ml-md-auto d-sm-none d-md-flex">
                        <li className="nav-item">
                            <Link className="nav-link" to='/login'>Login</Link>
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