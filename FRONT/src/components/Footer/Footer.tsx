import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer_container}>
            <br/><br/>
            {new Date().getFullYear()} &copy; All rights reserved
        </div>
    );
}
