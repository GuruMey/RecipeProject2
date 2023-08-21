import styles from "./BurgerMenu.module.css"
import {useContext} from "react";
import MyContext from "../../context/MyContext";
import Link from "next/link";
import axios from "axios";
import {useRouter} from "next/router";

export default (props: any) => {
    const context: any = useContext(MyContext)

    const router = useRouter()

    function close() {
        context.setGlobalState((ps: any) => ({...ps, showBurgerMenu: false}))
    }

    async function signOut() {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/auth/signout`, {}, {
                withCredentials: true
            })
            await router.push('/')
            router.reload();
        } catch(error) {
            console.log(error)
            alert("An error occurred")
        }
    }

    return <div className={styles.burger_menu}>
        <div className={styles.burger_container}>
            <button className={styles.burger_close_button} onClick={() => {
                close()
            }}>X</button>

            <img className={styles.navbar_logo_burger} src={`./logo.svg`} alt="logo" />

            <h1 className={styles.navbar_title_burger}>DELISHDISH</h1>

            <Link href="/" className={`${styles.navbar_element_burger} display-on-tablet-only`} onClick={() => close()}>Home</Link>

            {context?.globalState?.loggedIn &&<Link href="/CreateRecipe" className={`${styles.navbar_element_burger} display-on-tablet-only`} onClick={() => close()}>Create Recipe</Link>}

            {context?.globalState?.loggedIn &&<Link href="/MyRecipes" className={`${styles.navbar_element_burger} display-on-tablet-only`} onClick={() => close()}>My Recipes</Link>}

            {!context?.globalState?.loggedIn && <Link href="/auth/login" className={`${styles.navbar_element_burger} display-on-tablet-only`}
                   onClick={() => close()}>Login</Link>}

            {context?.globalState?.admin && <Link href="/admin" className={`${styles.navbar_element_burger} display-on-tablet-only`} onClick={() => close()}>Admin</Link>}

            <Link href="/about" className={`${styles.navbar_element_burger} display-on-tablet-only`} onClick={() => close()}>About</Link>

            {context?.globalState?.loggedIn &&<div className={`${styles.navbar_element_burger} display-on-tablet-only`} onClick={() => {
                close()
                signOut()
            }}>
                Log out
            </div>}
        </div>
    </div>
}