import '../styles/global.css';
import '../styles/forms.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MyContext from "../context/MyContext";
import {useEffect, useState} from "react";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import axios from "axios";

function MyApp({ Component, pageProps }) {
    const [globalState, setGlobalState] = useState({
        showBurgerMenu: false,
        loggedIn: false,
        isAdmin: false,
        username: ""
    })

    useEffect(() => {
        const checkWhoAmI = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/auth/whoami`, {
                    withCredentials: true
                })
                setGlobalState((prevState) => ({
                    ...prevState,
                    loggedIn: response.data.loggedIn,
                    admin: response.data.admin,
                    username: response.data.username
                }))
            } catch (error) {
                console.log(error)
            }
        }
        checkWhoAmI()
    }, [])

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
