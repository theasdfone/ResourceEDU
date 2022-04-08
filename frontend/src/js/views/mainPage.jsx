import React from "react";
import { Link } from "react-router-dom";

import '../../css/mainPage.css';
import video from "../../static/test.mp4";

export default class MainPage extends React.Component {

  render() {
    return (
      <div>
        <nav className="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
          <p className="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEDU</p>
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
  
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-sm-4">
              <h3>Checkout some other cool resources!</h3>
              <p>Links shown below:</p>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Github</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Documentation</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Design</a>
                </li>
              </ul>
              <hr className="d-sm-none"></hr>
            </div>
            <div className="col-sm-8">
              <h2>ResourceEDU</h2>
              <h5>A site for students to share and post resources</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Hey all, welcome to the resource drive. This is a WiP but more features and resources are on the way.
                You will need to register an account to access/post resources to this site. In the meantime, enjoy the video down below ;)</p>
              <video autoPlay loop muted>
                <source src={video} />
              </video>
            </div>
          </div>
        </div>
  
        <footer className="fixed-bottom bg-dark text-light">
          <p style={{marginLeft:"20px"}}>Built with Bootstrap 4.0</p>
        </footer>
      </div>
    );
  }
}
