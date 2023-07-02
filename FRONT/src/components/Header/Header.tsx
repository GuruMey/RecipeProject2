import * as React from 'react';
import '../../Styles/Header.css';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar-container">
                <div className="navbar-left">
                    <Link to={"/"} className="navbar-element"><a>Home</a></Link>
                    <Link to={"/CreateRecipe"} className="navbar-element"><a>Create Recipe</a></Link>
                </div>
                <div className="navbar-center">
                    <h1 className="navbar-title">DELISHDISH</h1>
                </div>
                <div className="navbar-right">
                    <Link to={"/Login"} className="navbar-element"><a>Login</a></Link>
                    <Link to={"/myfavorites"} className="navbar-element"><a>My Favorites</a></Link>
                </div>
            </nav>
        </div>
    );
}