import '../components/mainPage.css';
import {
  Link,
} from "react-router-dom";

export default function MainPage() {
  return (
    <body>
      <nav class="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
        <p class="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEDU</p>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav flex-row ml-md-auto d-sm-none d-md-flex">
            <li class="nav-item">
              <Link class="nav-link" to='/login'>Login</Link>
              {/* <a  href="/login">Login</a> */}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">About this project</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container" style={{ marginTop: "100px" }}>
        <div class="row">
          <div class="col-sm-4">
            <h3>Checkout some other cool resources!</h3>
            <p>Links shown below:</p>
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">Github</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Textbooks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Grade Calculator</a>
              </li>
            </ul>
            <hr class="d-sm-none"></hr>
          </div>
          <div class="col-sm-8">
            <h2>ResourceEDU</h2>
            <h5>A site for students to share and post resources</h5>
            <div class="fakeimg">Fake Image</div>
            <p>Some text..</p>
            <p>Hey all, welcome to the resource drive. This is a WiP but more features and resources are on the way. 
              You will need to register an account to access/post resources to this site. In the meantime, enjoy the video down below ;)</p>
          </div>
        </div>
      </div>

      <div class="fixed-bottom bg-dark text-light footer">
        <p>Built with Bootstrap 4.0</p>
      </div>
    </body>
  );
}
