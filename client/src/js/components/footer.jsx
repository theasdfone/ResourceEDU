import React from "react";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="bg-dark text-light footer">
                <a className="text-reset text-decoration-none footer-list" href="/about">About this project</a>
            </footer>
        )
    }
}