import styles from "./BurgerMenu.module.css"
import {useContext} from "react";
import MyContext from "../../context/MyContext";
import Link from "next/link";

export default (props: any) => {
    const context: any = useContext(MyContext)

    return <div className={styles.burger_menu}>
        <div className={styles.burger_container}>
        <button className={styles.burger_close_button} onClick={() => {
            //@ts-ignore
            context.setGlobalState((ps) => ({...ps, showBurgerMenu: !ps.showBurgerMenu}))
        }}>X</button>

        <img className={styles.navbar_logo_burger} src={`./logo.svg`} alt="logo" />
        <h1 className={styles.navbar_title_burger}>DELISHDISH</h1>
        <Link href="/" className={`${styles.navbar_element_burger} display-on-tablet-only`}> Home</Link>
        {context?.globalState?.loggedIn &&<Link href="/CreateRecipe" className={`${styles.navbar_element_burger} display-on-tablet-only`} > Create Recipe </Link>}
        {context?.globalState?.loggedIn &&<Link href="/MyRecipes" className={`${styles.navbar_element_burger} display-on-tablet-only`}>My Recipes </Link>}
        <Link href="/auth/login" className={`${styles.navbar_element_burger} display-on-tablet-only`}>Login </Link>

    </div>
    </div>
}