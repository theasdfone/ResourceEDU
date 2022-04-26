import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import '../../css/profile.css';

import AdminStore from "../api/user";

export default class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            oldPassword: "",
            password: "",
            confirm: "",
            page: "Personal", 
            error: false
        };
    }

    fieldHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    passwordHandler = async () => {
        const { oldPassword, password, confirm } = this.state;

        let testUser = {
            username: AdminStore.getCurrentUser().username,
            password: oldPassword
        }

        await AdminStore.loginUser(testUser).then(() => {
            if(password === confirm 
                && (password, confirm)
                && (password.length >= 8)) {
                AdminStore.changePassword(password);
            } else {
                this.setState({
                    error: true
                });
            }
        }).catch(() => {
            this.setState({
                error: true
            });
        });
    }

    handleEnterEvent = (event) => {
        if(event.key === 'Enter') {
            this.passwordHandler();
        }
    }

    deleteUser = () => {
        AdminStore.delete();
    }

    renderNav() {
        const user = AdminStore.getCurrentUser().username;

        return(
            <Nav
                user={user}
            />
        )
    }

    returnInfoMenu() {
        let mainBlock = {};

        switch (this.state.page) {
            case "Personal":
                mainBlock = (
                    <div>
                        <h3>Personal Info</h3>
                        <table className="table profile-personal-info">
                            <tbody>
                                <tr>
                                    <td className="profile-personal-header">Username:</td>
                                    <td>{AdminStore.getCurrentUser().username}</td>
                                </tr>
                                <tr>
                                    <td className="profile-personal-header">Email:</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
                break;
            case "Security":
                mainBlock = (
                    <div className="profile-security-info">
                        <h3>Security</h3>
                        <div className={`pt-2 ${this.state.error ? "input-failed" : ""}`}>
                            <label>Old Password</label>
                            <input type="password" className="form-control" placeholder="Old Password" name="oldPassword" 
                                onChange={this.fieldHandler}
                                onKeyDown={this.handleEnterEvent}
                            />
                        </div>
                        <div className={`pt-3 ${this.state.error ? "input-failed" : ""}`}>
                            <label>New Password</label>
                            <input type="password" className="form-control" placeholder="New Password" name="password" 
                                onChange={this.fieldHandler}
                                onKeyDown={this.handleEnterEvent}
                            />
                        </div>
                        <div className={`pt-3 ${this.state.error ? "input-failed" : ""}`}>
                            <label>Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Confirm Password" name="confirm" 
                                onChange={this.fieldHandler}
                                onKeyDown={this.handleEnterEvent}
                            />
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-secondary" onClick={this.passwordHandler}>Register</button>
                        </div>
                    </div>
                )
                break;
            case "Delete":
                mainBlock = (
                    <div>
                        <h3>Delete</h3>
                        <button onClick={this.deleteUser} className="profile-delete">Delete Account</button>
                    </div>
                )
                break;
        }

        return(
            <div className="profile-container">
                <div className="col-sm-3 profile-sidemenu">
                    <div className="listed">
                        <div onClick={() => {
                            this.setState({
                                page:"Personal"
                            })
                        }} className="list-group-item list-group-item-action">
                            Personal Info
                        </div>
                        <div onClick={() => {
                            this.setState({
                                page:"Security"
                            })
                        }} className="list-group-item list-group-item-action">
                            Security
                        </div>
                        <div onClick={() => {
                            this.setState({
                                page:"Delete"
                            })
                        }} className="list-group-item list-group-item-action">
                            Delete Account
                        </div>
                    </div>
                </div>
                <div className="col-sm-9 profile-main-content">
                        {mainBlock}
                </div>
            </div>
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
                {this.returnInfoMenu()}
                {this.renderFooter()}
            </div>
        )
    }
}