import React from "react";

import Nav from "../components/nav.jsx"
import Footer from "../components/footer.jsx"

import '../../css/sharelist.css';

import AdminStore from "../api/user";

import gear from "../../static/icons/gear.svg"

export default class ShareList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    renderNav() {
        const user = AdminStore.getCurrentUser().username;

        return(
            <Nav
                user={user}
            />
        )
    }

    renderStorageLinks() {
        return(
            <div className="container">
                <div className="row jumbotron dashboard-file-container">
                    <table className="table">
                        <thead>
                            <tr className="d-flex">
                                <th className="col-3" scope="col">Name</th>
                                <th className="col-3" scope="col">Date Uploaded</th>
                                <th className="col-3" scope="col">File Type</th>
                                <th className="col-2" scope="col">File Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((file)=> (
                                    <tr className="d-flex dashboard-table-container" key={file.id}>
                                        <td className="col-3">{file.name}</td>
                                        <td className="col-3">{file.date}</td>
                                        <td className="col-3">{file.fileType}</td>
                                        <td className="col-2">{file.fileSize}</td>
                                        <td> 
                                            <img className="dropdown-toggle" type="button" data-toggle="dropdown" src={gear} alt="gear" />
                                            {/* <div className="dropdown-menu">
                                                <div className="dropdown-item" onClick={() => this.shareClickHandler(file.id)}>Share</div>
                                                <div className="dropdown-item" onClick={() => this.downloadClickHandler(file.id, file.name, file.fileType)}>Download</div>
                                                <div className="dropdown-item" onClick={() => this.deleteClickHandler(file.id)}>Delete</div>
                                            </div> */}
                                        </td>
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
                <div className="sharelist-container">
                    {this.renderStorageLinks()}
                </div>
                {this.renderFooter()}
            </div>
        )
    }
}