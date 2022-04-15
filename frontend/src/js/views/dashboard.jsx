import React from "react";
import '../../css/loginHome.css';

import { Link } from "react-router-dom";

import Footer from "../components/footer.jsx"

import learn from "../../static/learn.jpg"
import coop from "../../static/coop.jpg"
import lifestyle from "../../static/uwlife.jpg"

export default class LoginHome extends React.Component {
    renderNav() {
        return(
        <nav className="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
            <p className="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEdu</p>
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

    renderFooter() {
        return (
            <Footer />
        )
    }

    render() {
        return (
            <div>
                {this.renderNav()}

                <div className="container d-flex justify-content-center align-items-center jumbotron text-light title">
                    <h1>Learn about Campus Life</h1>
                </div>
                <div className="container">
                    <div className="d-flex">
                        <a href="/" className="col-sm-4 justify-content-center align-items-center">
                            <img src={lifestyle} alt="lifestyle" className="images" id="img"/>
                            <h3 className="text">Life at UW</h3>
                        </a>
                        <a href="/" className="col-sm-4 justify-content-center align-items-center">
                            <img src={learn} alt="lifestyle" className="images" />
                            <h3 className="text">Academics</h3>
                        </a>
                        <a href="/" className="col-sm-4 justify-content-center align-items-center">
                            <img src={coop} alt="lifestyle" className="images" />
                            <h3 className="text" style={{ paddingLeft: "30px" }}>Co-ops</h3>
                        </a>
                    </div>
                </div>

                {this.renderFooter()}
            </div>
        );
    }
}