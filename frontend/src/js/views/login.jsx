import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import "../../css/login.css"

import AdminStore from "../api/user";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginfailed: false
        };
    }

    fieldHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleEnterEvent = (event) => {
        if(event.key === 'Enter') {
            this.loginHandler();
        }
    }

    loginHandler = async () => {
        const { username, password } = this.state;

        let loginDetails = {
            username: username,
            password: password
        }

        await AdminStore.loginUser(loginDetails);

        const user = AdminStore.getCurrentUser();

        if(!user) {
            this.setState({
                loginfailed: true
            });
        }
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

    render() {
        return (
            <div>
                {this.renderNav()}
                <div className="container login-main">
                    <div className="row">
                        <div className="jumbotron pt-4 pb-3 login-form">
                            <div className="form-group">
                                <h3>User Login</h3>
                                <div className={`${this.state.loginfailed ? "input-failed" : ""}`}>
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Enter Username" name="username" 
                                        onChange={this.fieldHandler}
                                        onKeyDown={this.handleEnterEvent}
                                    />
                                </div>
                                <div className={`pt-3 ${this.state.loginfailed ? "input-failed" : ""}`}>
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Password" name="password" 
                                        onChange={this.fieldHandler}
                                        onKeyDown={this.handleEnterEvent}
                                    />
                                </div>
                                {this.state.loginfailed 
                                ?
                                    <span>Invalid Username or Password</span>
                                : ""}
                                <div className="mt-3">
                                    <button className="btn btn-primary" onClick={this.loginHandler}>Login</button>
                                    <a href="/register" className="btn btn-light register-button">Register</a>
                                </div>
                                <div className="form-check pt-3">
                                    <label className="form-check-label"><input type="checkbox" className="form-check-input"/> Remember me</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}