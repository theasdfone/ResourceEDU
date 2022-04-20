import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import LoginStore from "../api/login";
import DocumentStore from "../api/documents";
import '../../css/dashboard.css';

import plus from "../../static/icons/plus.svg"

import learn from "../../static/learn.png"
import coop from "../../static/coop.png"
import lifestyle from "../../static/uwlife.png"

export default class LoginHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.fileRef = React.createRef();
    }

    uploadFileHandler = async (event) => {
        let data = this.state.data;

        let displayFile = {
            name: event.target.files[0].name,
            dateUploaded: this.getCurrentDate(),
            fileType: event.target.files[0].name.split('.').pop(),
            fileSize: this.formatBytes(event.target.files[0].size),
        }

        data.push(displayFile);

        const fileData = new FormData();
        fileData.append("file", event.target.files[0]);

        await DocumentStore.upload(fileData, displayFile);

        this.setState({
            data: data,
        });
    }
    
    fileClickHandler = () => {
        this.fileRef.current.click();
    }

    getCurrentDate() {
        let today = new Date();

        let day = today.getDate().toString().padStart(2, '0');
        let month = (today.getMonth() + 1).toString().padStart(2, '0');
        let year = today.getFullYear();

        return `${month}/${day}/${year}`;
    }

    //Community byte calculator
   formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
    
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
        const i = Math.floor(Math.log(bytes) / Math.log(k));
    
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    renderNav() {
        const user = LoginStore.getCurrentUser().username;

        return(
            <Nav
                user={user}
            />
        )
    }

    //TODO: Implement search by name, file type
    // renderSearchBar() {

    // }

    renderStorageLinks() {
        return(
            <div>
                <div className="row jumbotron dashboard-file-container">
                    <table className="table">
                        <thead>
                            <tr className="d-flex">
                                <th className="col-3" scope="col">Name</th>
                                <th className="col-3" scope="col">Date Uploaded</th>
                                <th className="col-3" scope="col">File Type</th>
                                <th className="col-2" scope="col">File Size</th>
                                <th className="col-1" scope="col">
                                    <img className="dropdown-toggle" type="button" id="drop" data-toggle="dropdown" src={plus} alt="plus" />
                                    <div className="dropdown-menu">
                                        <input style={{display: 'none'}} ref={this.fileRef} accept=".pdf, .png, .jpg, .mp3, .mp4, .xls, .doc,.docx" type="file" onChange={this.uploadFileHandler}/>
                                        <div className="dropdown-item" onClick={this.fileClickHandler}>Add File</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((file)=> (
                                    <tr className="d-flex dashboard-table-container" key={file.name}>
                                        <td className="col-3">{file.name}</td>
                                        <td className="col-3">{file.dateUploaded}</td>
                                        <td className="col-3">{file.fileType}</td>
                                        <td className="col-2">{file.fileSize}</td>
                                        <td className="col-1"/>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
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
                <div className="dashboard-container">
                    <div className="container d-flex justify-content-center align-items-center jumbotron text-light resource-doc">
                        <h1>Resource Docs</h1>
                    </div>
                    <div className="container">
                        {this.renderStorageLinks()}
                        <h3>Curated Resources</h3>
                        <div className="d-flex row" id="dashboard-link-color">
                            <a href="/" className="col-sm-4 justify-content-center align-items-center">
                                <img src={lifestyle} alt="lifestyle" className="dashboard-images"/>
                                <div className="dashboard-text-container">
                                    <h3 className="dashboard-text">Life at UW</h3>
                                </div>
                            </a>
                            <a href="/" className="col-sm-4 justify-content-center align-items-center">
                                <img src={learn} alt="lifestyle" className="dashboard-images" />
                                <div className="dashboard-text-container">
                                    <h3 className="dashboard-text">Academics</h3>
                                </div>
                            </a>
                            <a href="/" className="col-sm-4 justify-content-center align-items-center">
                                <img src={coop} alt="lifestyle" className="dashboard-images" />
                                <div className="dashboard-text-container">
                                    <h3 className="dashboard-text">Co-ops</h3>
                                </div>
                            </a>
                        </div>
                        <br/>
                    </div>
                </div>
                {this.renderFooter()}
            </div>
        );
    }
}