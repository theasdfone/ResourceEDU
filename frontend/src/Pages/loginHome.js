import '../components/loginHome.css';
import learn from "../resources/learn.jpg"
import coop from "../resources/coop.jpg"
import lifestyle from "../resources/uwlife.jpg"
import '../components/loginHome.css';

export default function LoginHome() {
    return (
        <body>
            <nav class="fixed-top navbar navbar-expand bg-dark navbar-dark" style={{ height: "75px" }}>
                <p class="navbar-brand" style={{ marginTop: "5px", marginLeft: "40px" }}>ResourceEdu</p>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav flex-row ml-md-auto d-sm-none d-md-flex">
                        <li class="nav-item">
                            <a class="nav-link" href="/">About this project</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container d-flex justify-content-center align-items-center jumbotron text-light title">
                <h1>Learn about Campus Life</h1>
            </div>
            <div class="container">
                <div class="d-flex">
                    <a href="/" class="col-sm-4 justify-content-center align-items-center">
                        <img src={lifestyle} alt="lifestyle" class="images" id="img"/>
                        <h3 class="text">Life at UW</h3>
                    </a>
                    <a href="/" class="col-sm-4 justify-content-center align-items-center">
                        <img src={learn} alt="lifestyle" class="images" />
                        <h3 class="text">Academics</h3>
                    </a>
                    <a href="/" class="col-sm-4 justify-content-center align-items-center">
                        <img src={coop} alt="lifestyle" class="images" />
                        <h3 class="text" style={{ paddingLeft: "30px" }}>Co-ops</h3>
                    </a>
                </div>
            </div>

            <footer class="fixed-bottom bg-dark text-light">
                <p style={{marginLeft:"20px"}}>Built with Bootstrap 4.0</p>
            </footer>
        </body>
    );
}