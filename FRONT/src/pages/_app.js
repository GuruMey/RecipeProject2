import '../styles/global.css';
import '../styles/footer.css';
import '../styles/header.css';
import '../styles/auth.css';
import '../styles/pages.css';
import '../styles/recipeform.css';
import '../styles/recipesgalleries.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
