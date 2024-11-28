import React from "react";
import "./Header.css";

function Header() {
return(
    <header className="Header">
        <h1 className="Header-Logo">KuKe-Dev</h1>
        <aside className="Header-Buttons">
            <a href="#Home" className="Button">Start</a>
            <a href="#Projects" className="Button">Experience</a>
            <a href="#Skills" className="Button">Skills</a>
            <a href="/" className="Button">Contact</a>
        </aside>
    </header>
);
}
export default Header