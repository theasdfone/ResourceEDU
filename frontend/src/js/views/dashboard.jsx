import React from "react";
import '../../css/dashboard.css';

import Footer from "../components/footer.jsx"

import LoginStore from "../api/login";

import learn from "../../static/learn.jpg"
import coop from "../../static/coop.jpg"
import lifestyle from "../../static/uwlife.jpg"

export default class LoginHome extends React.Component {
    renderNav() {
        const user = LoginStore.getCurrentUser().username;

        return(
            <nav className="fixed-top navbar navbar-expand bg-dark navbar-dark navbar-container">
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <a href="/" className="navbar-brand nav-center">ResourceEDU</a>
                    <ul className="navbar-nav flex-row ml-md-auto">
                        <li className="nav-item">
                            <span className="navbar-text dashboard-username">Hello {user}</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={LoginStore.logout} href='/'>Logout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About this project</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    renderFooter() {
        return (
            <Footer />
        )
    }

    render() {
        return (
            <div className="dashboard">
                {this.renderNav()}
                <div className="container d-flex justify-content-center align-items-center jumbotron text-light resource-doc">
                    <h1>Resource Docs</h1>
                </div>
                <div className="container">
                    <div className="d-flex" id="dashboard-link-color">
                        <a href="/" className="col-sm-4 justify-content-center align-items-center">
                            <img src={lifestyle} alt="lifestyle" className="dashboard-images"/>
                            <div className="dashboard-text-container">
                                <h3 className="dashboard-text">Life at UW</h3>
                            </div>
                        </a>
                        <a href="/" className="col-sm-4 justify-content-center align-items-center">
                            <img src={learn} alt="lifestyle" className="dashboard-images" />
                            <div className="dashboard-text-container">
                                <h3 className="dashboard-text">Academics</h3>
                            </div>
                        </a>
                        <a href="/" className="col-sm-4 justify-content-center align-items-center">
                            <img src={coop} alt="lifestyle" className="dashboard-images" />
                            <div className="dashboard-text-container">
                                <h3 className="dashboard-text">Co-ops</h3>
                            </div>
                        </a>
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}