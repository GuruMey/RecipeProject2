import Link from 'next/link';
import  styles from "./Header.module.css";
import {useContext} from "react";
import MyContext from "../../context/MyContext";

export default function Header() {
    const context:any = useContext(MyContext)

    return (
        <div>
            <nav className={styles.navbar_container}>
                <div className={styles.navbar_left}>
                    <button onClick={() => {
                        //@ts-ignore
                        context.setGlobalState((ps) => ({...ps, showBurgerMenu: !ps.showBurgerMenu}))
                    }} className={`${styles.navbar_burger} display-on-tablet-only`}>
                        <img  src={`./burger.svg`} alt="burger" />
                    </button>
                    <Link href="/" className={`${styles.navbar_element} display-on-desktop-only`}> Home</Link>
                    {context?.globalState?.loggedIn &&<Link href="/CreateRecipe" className={`${styles.navbar_element} display-on-desktop-only`} > Create Recipe </Link>}
                </div>

                <div className={styles.navbar_center}>
                    <img className={styles.navbar_logo} src={`./logo.svg`} alt="logo" />
                    <h1 className={styles.navbar_title}>DELISHDISH</h1>
                    <h2 className={styles.navbar_undertitle}>The best vegan recipes</h2>
                </div>
                <div className={styles.navbar_right}>
                    {context?.globalState?.loggedIn &&<Link href="/MyFavourites" className={`${styles.navbar_element} display-on-desktop-only`}>My Favorites </Link>}
                    <Link href="/authpage" className={`${styles.navbar_element} display-on-desktop-only`}>Login </Link>
                </div>
            </nav>
        </div>
    );
}
