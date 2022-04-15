import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import first from "../../static/first.jpg";
import second from "../../static/second.jpg";
import third from "../../static/third.jpg";

import LoginStore from "../api/login";

export default class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }
    
    fieldHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    loginHandler = async () => {
        const { username, password } = this.state;

        let loginDetails = {
            username: username,
            password: password
        }

        await LoginStore.loginUser(loginDetails);
    }

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

    renderSlides() {
        return (
            <div className="col-sm-7 d-none d-sm-block" style={{ marginTop: "20vh", paddingLeft: "10vw" }}>
                <div className="carousel slide" data-ride="carousel" id="slides">
                    <ol className="carousel-indicators" style={{ paddingLeft: "21vw" }}>
                        <li data-target="#slides" data-slide-to="0" className="active" style={{ paddingLeft: "4vw" }}></li>
                        <li data-target="#slides" data-slide-to="1" style={{ paddingLeft: "4vw" }}></li>
                        <li data-target="#slides" data-slide-to="2" style={{ paddingLeft: "4vw" }}></li>
                    </ol>
                    <div className="carousel-inner" style={{ height: "50vh", width: "50vw" }}>
                        <div className="carousel-item active">
                            <img className="img-fluid" src={first} alt="first slide" style={{ height: "50vh", width: "70vw" }} />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={second} alt="second slide" style={{ height: "50vh", width: "70vw" }} />
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src={third} alt="third slide" style={{ height: "50vh", width: "70vw" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderNav()}
                <div className="container" style={{ marginLeft: "5vw" }}>
                    <div className="row">
                        <div className="jumbotron col-sm-5 pt-4 pb-3" style={{ height: "400px", width: "30vw", marginTop: "20vh", backgroundColor: "orange" }}>
                            <div className="form-group">
                                <h3>User Login</h3>
                                <label>Username</label>
                                <input type="username" className="form-control" placeholder="Enter Username" name="username" onChange={this.fieldHandler}/>
                                <div className="pt-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password" name="password" onChange={this.fieldHandler}/>
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-primary" onClick={this.loginHandler}>Login</button>
                                    <a href="/createuser"><button type="button" style={{marginLeft: "10px"}}>Register</button></a>
                                </div>
                                <div className="form-check pt-3">
                                    <label className="form-check-label"><input type="checkbox" className="form-check-input"/> Remember me</label>
                                </div>
                            </div>
                        </div>
                        {this.renderSlides()}
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}