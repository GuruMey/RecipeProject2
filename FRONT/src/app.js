import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyRecipes from "./pages/MyRecipes";
import CreateRecipe from "./pages/CreateRecipe";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/createrecipe" element={<CreateRecipe />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/recipes/:id" element={<RecipeView />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
