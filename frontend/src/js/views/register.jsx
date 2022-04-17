import React from "react";

import "../../css/register.css"

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import RegisterStore from "../api/register";

export default class Register extends React.Component {
    state = {
        username: "",
        password: "",
        confirm: "",
        registerfail: false
    }
    
    fieldHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    usernameCheck(username) {
        var characters = /[!@#$%^&*()+\-=\[\]{};':"\\|,<>\/? ]+/;

        if(characters.test(username)) {
            return false;
        }
        
        return true;
    }

    registerHandler = async () => {
        const { username, password, confirm } = this.state;

        let registerDetails = {
            username: username,
            password: password,
        }

        if(password === confirm 
            && (username, password, confirm)
            && (password.length >= 8)
            && (this.usernameCheck(username))) {
            await RegisterStore.registerNewUser(registerDetails);
        } else {
            this.setState({
                registerfail: true
            })
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
                <div className="container register-main">
                    <div className="row">
                        <div className="jumbotron pt-4 pb-3 register-form">
                            <h2>Register New Account</h2>
                            <div>
                                <div>
                                    <label>New Username</label>
                                    <input type="text" className="form-control" placeholder="New Username" name="username" onChange={this.fieldHandler}/>
                                    {this.state.registerfail 
                                    ?
                                        <span>Username can only contain letters, numbers, periods and underscores</span>
                                    : ""}
                                </div>
                                <div>
                                    <label>New Password</label>
                                    <input type="password" className="form-control" placeholder="New Password" name="password" onChange={this.fieldHandler}/>
                                    {this.state.registerfail 
                                    ?
                                        <span>Password must be greater than 8 characters</span>
                                    : ""}
                                </div>
                                <div>
                                    <label>Confirm Password</label>
                                    <input type="password" className="form-control" placeholder="Confirm Password" name="confirm" onChange={this.fieldHandler}/>
                                    {this.state.registerfail 
                                    ?
                                        <span>Password must be greater than 8 characters</span>
                                    : ""}
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-light" onClick={this.registerHandler}>Register</button>
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