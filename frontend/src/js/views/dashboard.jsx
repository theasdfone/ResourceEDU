import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import LoginStore from "../api/login";
import '../../css/dashboard.css';

import learn from "../../static/learn.png"
import coop from "../../static/coop.png"
import lifestyle from "../../static/uwlife.png"

export default class LoginHome extends React.Component {
    renderNav() {
        const user = LoginStore.getCurrentUser().username;

        return(
            <Nav
                user={user}
            />
        )
    }

    renderFooter() {
        return (
            <Footer />
        )
    }

    render() {
        return (
            <div>
                {this.renderNav()}
                <div className="dashboard-container">
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
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}