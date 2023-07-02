import styles from "./BurgerMenu.module.css"
import {useContext} from "react";
import MyContext from "../../context/MyContext";

export default (props: any) => {
    const context = useContext(MyContext)

    return <div className={styles.burger_menu}>
        <button onClick={() => {
            //@ts-ignore
            context.setGlobalState((ps) => ({...ps, showBurgerMenu: !ps.showBurgerMenu}))
        }}>fermer</button>
        jhghjglkhhjkgbjkhgvjkghv
    </div>
}