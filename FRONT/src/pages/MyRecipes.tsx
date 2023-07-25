import RecipesGallery from "../components/RecipeGallery/RecipesGallery";
import {useContext} from "react";
import MyContext from "../context/MyContext";

export default function MyRecipes() {
    const context:any = useContext(MyContext)

    return (
        <div>
            <RecipesGallery title={"Browse your recipes"} userId={context?.globalState?.userId}/>
        </div>
    );
}
