import * as React from 'react';
import {useEffect} from "react";
import {Link} from "react-router-dom";
import '../../Styles/receipesgalleries.css';
import axios from "axios";

export default function RecipeGallery() {
    const [recipes, setRecipes] = React.useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8001/recipes");
                setRecipes(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="gallery-page">
            <div className="before-gallery">
                <h1 className="gallery-page-title">Recipes</h1>
                <input className="search-input" type="text" placeholder="Search for a recipe..."/>
            </div>
            <div className="gallery-main">
                {recipes.map((recipe: any) => (
                    <div key={recipe._id} className="gallery-card">
                        <div className="gallery-card-top">
                            <img className="gallery-card-img" src={recipe.coverUrl} alt="pizza"/></div>
                        <div className="gallery-card-center">
                            <Link className="gallery-card-title" to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                            <Link className="gallery-card-tags"
                                  to={`/recipes/${recipe._id}`}>{recipe.tags.map((tag: any) => <span
                                className="card-tag"> #{tag} </span>)}</Link></div>
                        <div className="gallery-card-bottom">
                            <Link to={`/recipes/${recipe._id}`}><button className="button-primary">Open Recipe</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}