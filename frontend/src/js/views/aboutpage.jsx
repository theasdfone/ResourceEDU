import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import LoginStore from "../api/login";
import '../../css/aboutpage.css';

import storage from "../../static/storage.png"

export default class AboutPage extends React.Component {
    renderNav() {
        const user = LoginStore.getCurrentUser()?.username;

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
                        <p>ResourceEDU is a storage drive capable of fulfilling all your data storage and data sharing needs. Store school resources such as textbooks, homework assignments, pdfs
                            and images among other resources to always have access whereever, whenever you require them. You can also share resources with others to quickly convey ideas and information.
                            ResourceEDU covers some of these basic needs and more. Try now and see for yourself!
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