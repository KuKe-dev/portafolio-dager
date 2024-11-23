import React from "react";
import "./Header.css";

function Header() {
return(
    <header className="Header">
        <h1 className="Header-Logo">Dot Dager</h1>
        <aside className="Header-Buttons">
            <a href="#Home" className="Button">Home</a>
            <a href="/" className="Button">About</a>
            <a href="/" className="Button">Contact</a>
        </aside>
    </header>
);
}
export default Header