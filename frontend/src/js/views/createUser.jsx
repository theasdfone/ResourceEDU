import React from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

export default class CreateUser extends React.Component {
    renderNav() {
        return (
            <Nav />
        )
    }

    renderFooter() {
        return (
            <Footer />
        )
    }

    render() {
        return (
            <body>
                <nav class="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
                    <p class="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEdu</p>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav flex-row ml-md-auto d-sm-none d-md-flex">
                            <li class="nav-item">
                                <Link class="nav-link" to='/login'>Login</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">About this project</a>
                            </li>
                        </ul>
                    </div>
                </nav>
    
                <div class="container">
                    <div class="row no-gutters">
                        <div class="jumbotron float-left" style={{ marginTop: "25vh", height: "45vh", width: "20vw", paddingTop: "4vh" }}>
                            <h2>Register</h2>
                            <form action="/signup">
                                <label for="username"> New Username</label>
                                <input type="text" class="form-control" placeholder="New Username" name="username" />
                                <label for="password"> New Password</label>
                                <input type="password" class="form-control" placeholder="New Password" name="password" />
                                {/* <label for="confirm"> Confirm Password</label>
                                <input type="password" class="form-control" placeholder="Confirm Password" name="confirm" /> */}
    
                                <div class="mt-3">
                                    <button type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-6">
                        </div>
                    </div>
                </div>
    
                <footer class="fixed-bottom bg-dark text-light" style={{ overflow: "hidden" }}>
                    <p>Built with Bootstrap 4.0</p>
                </footer>
    
            </body>
        );
    }
}