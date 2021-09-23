import {
    Link
} from "react-router-dom";
import first from "../resources/first.jpg"
import second from "../resources/second.jpg"
import third from "../resources/third.jpg"

export default function Login() {
    return (
        <body>
            <nav class="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
                <p class="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEdu</p>
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

            <div class="container" style={{ marginLeft: "5vw" }}>
                <div class="row">
                    <div class="jumbotron col-sm-5 pt-4 pb-3" style={{ height: "400px", width: "30vw", marginTop: "20vh", backgroundColor: "orange" }}>
                        <form action="/loginCheck">
                            <div class="form-group">
                                <h3>User Login</h3>
                                <label for="username">Username</label>
                                <input type="username" class="form-control" placeholder="Enter Username" name="username" />
                                <div class="pt-3">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Enter Password" name="password" />
                                </div>
                                <div class="mt-3">
                                    <button class="btn btn-primary">Login</button>
                                    <a href="/createUser"><button type="button" style={{marginLeft: "10px"}}>Register</button></a>
                                </div>
                                <div class="form-check pt-3">
                                    <label class="form-check-label"><input type="checkbox" class="form-check-input"/> Remember me</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="col-sm-7 d-none d-sm-block" style={{ marginTop: "20vh", paddingLeft: "10vw" }}>
                        <div class="carousel slide" data-ride="carousel" id="slides">
                            <ol class="carousel-indicators" style={{ paddingLeft: "21vw" }}>
                                <li data-target="#slides" data-slide-to="0" class="active" style={{ paddingLeft: "4vw" }}></li>
                                <li data-target="#slides" data-slide-to="1" style={{ paddingLeft: "4vw" }}></li>
                                <li data-target="#slides" data-slide-to="2" style={{ paddingLeft: "4vw" }}></li>
                            </ol>
                            <div class="carousel-inner" style={{ height: "50vh", width: "50vw" }}>
                                <div class="carousel-item active">
                                    <img class="img-fluid" src={first} alt="first slide" style={{ height: "50vh", width: "70vw" }} />
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src={second} alt="second slide" style={{ height: "50vh", width: "70vw" }} />
                                </div>
                                <div class="carousel-item">
                                    <img class="img-fluid" src={third} alt="third slide" style={{ height: "50vh", width: "70vw" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="fixed-bottom bg-dark text-light">
                <p>Built with Bootstrap 4.0</p>
            </footer>
        </body>
    );
}