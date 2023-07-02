import * as React from 'react';
import Link from 'next/link';
import  styles from "./Header.module.css";


export default function Header() {
    return (
        <div>
            <nav className={styles.navbar_container}>
                <div className={styles.navbar_left}>
                    <Link href="/" className={styles.navbar_element}> Home</Link>
                    <Link href="/CreateRecipe" className={styles.navbar_element} > Create Recipe </Link>
                </div>

                <div className={styles.navbar_center}>
                    <img className={styles.navbar_logo} src={`./logo.svg`} alt="logo" />
                    <h1 className={styles.navbar_title}>DELISHDISH</h1>
                    <h2 className={styles.navbar_undertitle}>The best vegan recipes</h2>
                </div>
                <div className={styles.navbar_right}>
                    <Link href="/MyFavourites" className={styles.navbar_element}>My Favorites </Link>
                    <Link href="/authpage" className={styles.navbar_element}>Login </Link>
                </div>
            </nav>
        </div>
    );
}
