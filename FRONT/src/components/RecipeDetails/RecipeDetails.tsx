import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import {useRouter} from "next/router";

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState<any>({});

    const router = useRouter()
    const { recipeId } = router.query

    useEffect(() => {
        if (!recipeId) {
            return
        }

        async function getRecipe () {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/getRecipe/${recipeId}`);
                setRecipe(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getRecipe()

    }, [recipeId]);


    const { _id, title, description, preparation_time, ingredients, steps } = recipe;


    return (
        <div className="recipe-view">
            {_id && (
                <div key={_id} className="recipe">
                    <div className="title-banner">
                        <div className="recipe-view-title"><Link href={`/recipe/${_id}`}>{title}</Link>
                            <button className="favorites-button">Add to favorites</button>
                            <button className="favorites-button">Remove from favorites</button>
                            <button className="edit-recipe-button">Edit</button>
                        </div>
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
                        <button>Delete recipe</button>
                    </div>


                </div>

            )}
        </div>
    );
}
