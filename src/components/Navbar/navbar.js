/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar;