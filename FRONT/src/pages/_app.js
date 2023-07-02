import '../styles/global.css';
import '../styles/forms.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MyContext from "../context/MyContext";
import {useState} from "react";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import UserAdmin from "../components/UserProfile/UserAdmin";
import UserNonAdmin from "../components/UserProfile/UserNonAdmin";

function MyApp({ Component, pageProps }) {
    const [globalState, setGlobalState] = useState({
        showBurgerMenu: false,
        loggedIn: true,
        isAdmin: false,
    })

    return (
        <MyContext.Provider value={{globalState, setGlobalState}}>
            {globalState.showBurgerMenu && <BurgerMenu />}

            <Header />
            <Component {...pageProps} />
            <Footer />
        </MyContext.Provider>
    );
}

export default MyApp;
