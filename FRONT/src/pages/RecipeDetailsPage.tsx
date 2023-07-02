import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import CommentSection from "../components/RecipeDetails/CommentSection";
import Rating from "../components/RecipeDetails/Rating";

export default function RecipeDetailsPage() {
    return (
        <div>
            <h1>RecipeDetailsPage</h1>
            <RecipeDetails/>
            <Rating/>
            <CommentSection/>
        </div>
    );
}
