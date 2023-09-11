import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import AdminStore from "../api/user";
import '../../css/aboutpage.css';

import storage from "../../static/storage.png"

export default class Test1 extends React.Component {
    renderNav() {
        const user = AdminStore.getCurrentUser()?.username;

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
                <div className="container about-container">
                    <h1>About ResourceEDU</h1> <br/>
                    <div className="about-text">
                        <p>ResourceEDU is a fullstack application 
                        that aims to provide an alternative for file management and storage services for students. 
                        ResourceEDU currently operates on local storage but has the necessary framework to support AWS and other cloud databases.
                        </p> <br/>
                        <img className="about-image" src={storage} alt="Resource Dashboard"/> <br/>
                        <p className="mt-4">Customizable containers such as the ones seen above helps you organize data into more manageable categories. </p>
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}