import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8001/recipes/id");
                setRecipe(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };
        fetchData();
    }, []);

    const { _id, title, description, preparation_time, ingredients, steps } = recipe;


    return (
        <div className="recipe-view">
            {_id && (
                <div key={_id} className="recipe">
                    <div className="title-banner">
                        <div className="recipe-view-title"><Link href={`/recipe/${_id}`}>{title}</Link></div>
                        <div className="recipe-view-description"><Link href={`/recipe/${_id}`}>{description}</Link></div>
                        <div className="recipe-view-time"><Link href={`/recipe/${_id}`}>Preparation time: {preparation_time} min</Link></div>
                        <div className="recipe-view-tags"><Link href={`/recipe/${_id}`}>{recipe.tags.map((tag: any) => <span
                            className="card-tag">{tag} </span>)}</Link></div>
                    </div>
                    <div className="recipe-view-text">
                        <div className="recipe-view-ingredients">
                            Ingredients:
                            <Link href={`/recipe/${_id}`}>
                                <ul>
                                    {ingredients.map((ingredient: string) => (
                                        <li key={ingredient}>{ingredient}</li>
                                    ))}
                                </ul>
                            </Link>
                        </div>
                        <div className="recipe-view-steps">
                            Steps to follow:
                            <Link href={`/recipe/${_id}`}>
                                <ol>
                                    {steps.map((step: string) => (
                                        <li key={step}>{step}</li>
                                    ))}
                                </ol>
                            </Link>
                        </div>
                    </div>


                </div>

            )}
        </div>
    );
}
