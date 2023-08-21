import styles from "./Footer.module.css"
import Link from "next/link";

export default function Footer() {
    return <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_section}>
                    <img className={styles.navbar_logo} src={`/logo.svg`} alt="logo" />
                </div>
                <div className={styles.footer_section}>
                    <div className={styles.footer_title}>Browse the website</div>
                    <Link href={"/"}>
                        <div className={styles.footer_element}>Home</div>
                    </Link>
                    <Link href={"/about"}>
                        <div className={styles.footer_element}>About</div>
                    </Link>
                </div>
                <div className={styles.footer_section}>
                    <div className={styles.footer_title}>Legal</div>
                    <Link href={"/legal"}>
                        <div className={styles.footer_element}>Terms and conditions</div>
                    </Link>
                </div>
                <div className={styles.footer_section}>
                    <div className={styles.footer_title}>Social</div>
                    <div>
                        <a href={"https://fr-fr.facebook.com/"} target={"_blank"}><img alt={"facebook"} className={styles.social} src={"/facebook.svg"} /></a>
                        <a href={"https://www.instagram.com/"} target={"_blank"}><img alt={"instagram"} className={styles.social} src={"/instagram.svg"} /></a>
                        <a href={"https://twitter.com/?lang=fr"} target={"_blank"}><img alt={"twitter"} className={styles.social} src={"/twitter.svg"} /></a>
                    </div>
                </div>
            </div>
        <div className={"section"}>
            {new Date().getFullYear()} &copy; All rights reserved - for any question contact leshem.m@gmail.com
        </div>
    </div>
}
