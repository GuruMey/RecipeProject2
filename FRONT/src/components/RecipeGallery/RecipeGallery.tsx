import * as React from 'react';
import {useEffect} from "react";
import Link from 'next/link';
import axios from "axios";

export default function RecipeGallery() {
    const [recipes, setRecipes] = React.useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe`);
                setRecipes(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className="gallery-page">
            <div className="before-gallery">
                <h2 className="gallery-page-title">Recipes</h2>
                <input className="search-input" type="text" placeholder="Search for a recipe..."/>
            </div>
            <div className="gallery-main">
                {recipes.map((recipe: any) => (
                    <div key={recipe._id} className="gallery-card">
                        <div className="gallery-card-top">
                            <img className="gallery-card-img" src={recipe.coverUrl} alt="pizza"/></div>
                        <div className="gallery-card-center">
                            <Link className="gallery-card-title" href={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                            <Link className="gallery-card-tags"
                                  href={`/recipes/${recipe._id}`}>{recipe.tags.map((tag: any) => <span
                                className="card-tag"> #{tag} </span>)}</Link></div>
                        <div className="gallery-card-bottom">
                            <Link href={`/recipes/${recipe._id}`}><button className="button-primary">Open Recipe</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}