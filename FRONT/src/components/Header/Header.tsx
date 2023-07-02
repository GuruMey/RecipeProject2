import * as React from 'react';
import Link from 'next/link';

//code the burger menu for mobile


export default function Header() {
    return (
        <div>
            <nav className="navbar-container">
                <div className="navbar-left">
                    <Link href="/" className="navbar-element"> Home</Link>
                    <Link href="/CreateRecipe" className="navbar-element" > Create Recipe </Link>
                </div>
                <div className="navbar-center">
                    <h1 className="navbar-title">DELISHDISH</h1>
                    <h2 className="navbar-undertitle">The best vegan recipes</h2>
                </div>
                <div className="navbar-right">
                    <Link href="/MyFavourites" className="navbar-element">My Favorites </Link>
                    <Link href="/authpage" className="navbar-element">Login </Link>
                </div>
            </nav>
        </div>
    );
}
