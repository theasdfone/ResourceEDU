import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import AdminStore from "../api/user";
import '../../css/mainpage.css';

import dashboard from "../../static/dashboard.png";
import video from "../../static/test.mp4";

export default class MainPage extends React.Component {
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

  renderSidemenu() {
    return (
      <div className="col-sm-4 side-menu">
        <h3>Links below for project details</h3>
        <div className="list-group listed">
            <a className="list-group-item list-group-item-action active" href="https://github.com/theasdfone/ResourceEdu">
              Github
            </a>
            <a className="list-group-item list-group-item-action" href="https://docs.google.com/document/d/1k1z6zoMlGZnGI0lVxAFdIeLqrFFSv6z9KVPk8ZyZseI/edit?usp=sharing">
              Design Doc
            </a>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderNav()}
        <div className="container main-page">
          <div className="row">
            {this.renderSidemenu()}
            <div className="col-sm-8">
              <h2>ResourceEDU</h2>
              <h5>A site for students to store and share resources</h5>
              <img className="main-img" src={dashboard} alt="Resource Dashboard"/>
              <p>View of the dashboard</p>
              <p>Hey all, welcome to the resource drive. This is a WiP but more features and resources are on the way.
                You will need to register an account to access/post resources to this site. In the meantime, enjoy the video down below ;)</p>
              <video autoPlay loop muted>
                <source src={video} />
              </video>
            </div>
          </div>
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}
