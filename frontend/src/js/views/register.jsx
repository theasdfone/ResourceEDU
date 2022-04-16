import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import RegisterStore from "../api/register";

export default class Register extends React.Component {
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

    registerHandler = async () => {
        const { username, password } = this.state;

        let registerDetails = {
            username: username,
            password: password
        }

        await RegisterStore.registerNewUser(registerDetails);
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
                <div className="container">
                    <div className="row no-gutters">
                        <div className="jumbotron float-left" style={{ marginTop: "25vh", height: "45vh", width: "20vw", paddingTop: "4vh" }}>
                            <h2>Register</h2>
                            <div>
                                <label for="username"> New Username</label>
                                <input type="text" className="form-control" placeholder="New Username" name="username" onChange={this.fieldHandler}/>
                                <label for="password"> New Password</label>
                                <input type="password" className="form-control" placeholder="New Password" name="password" onChange={this.fieldHandler}/>
                                {/* <label for="confirm"> Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Confirm Password" name="confirm" /> */}
    
                                <div className="mt-3">
                                    <button onClick={this.registerHandler}>Register</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                        </div>
                    </div>
                </div>
    
                {this.renderFooter()}
            </div>
        );
    }
}