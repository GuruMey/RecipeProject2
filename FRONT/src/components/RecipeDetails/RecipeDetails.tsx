import React, {useState, useEffect, useContext} from 'react';
import Link from 'next/link';
import {useRouter} from "next/router";
import styles from "./RecipeDetails.module.css";
import { getRecipeById } from '../../services/recipeService';
import MyContext from "../../context/MyContext";
import http from "../../services/httpService";



export default function RecipeDetails() {
    const context:any = useContext(MyContext)

    const [recipe, setRecipe] = useState<any>({});

    const [deleted, setDeleted] = useState<boolean>(false);

    const router = useRouter()
    const { recipeId } = router.query

    useEffect(() => {
        if (!recipeId) {
            return
        }

        async function getRecipe () {
            try {
                const response = await getRecipeById(recipeId);
                setRecipe(response.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getRecipe()

    }, [recipeId]);

    async function action (a: string) {
        switch(a) {
            case 'like': {
                try {
                    await http.patch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/like/${recipeId}`, {
                        liked: true,
                        userId: context?.globalState?.userId
                    }, {
                        withCredentials: true
                    })
                    window.location.reload()
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                return
            }
            case 'unlike': {
                try {
                    await http.patch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/like/${recipeId}`, {
                        liked: false,
                        userId: context?.globalState?.userId
                    }, {
                        withCredentials: true
                    })
                    window.location.reload()
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                return
            }
            case 'publish':{
                try {
                    await http.patch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/publish/${recipeId}`, {
                        published: true
                    }, {
                        withCredentials: true
                    })
                    window.location.reload()
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                return
            }
            case 'unpublish':{
                try {
                    await http.patch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/publish/${recipeId}`, {
                        published: false
                    }, {
                        withCredentials: true
                    })
                    window.location.reload()
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                return
            }
            case 'delete':{
                try {
                    await http.delete(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/${recipeId}`, {
                        withCredentials: true
                    })
                    setDeleted(true)
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
                return
            }
        }
    }

    if (!recipe) {
        return <div className={"section"}>
            <br/><br/><br/>
            The recipe you are looking for does not exist, <Link href={"/"}><button>keep browsing</button></Link>.
            <br/><br/><br/>
        </div>
    }

    if (deleted) {
        return <div className={"section"}>
            <br/><br/><br/>
            The recipe was deleted successfully, <Link href={"/"}><button>keep browsing</button></Link>.
            <br/><br/><br/>
        </div>
    }

    const { _id, title, description, time, ingredients, steps, createdBy, published } = recipe;

    const own = createdBy === context?.globalState?.userId
    const like = context?.globalState?.userId && recipe.likedBy?.includes(context?.globalState?.userId)

    return (
        <div className={styles.recipe_view}>

            <div className={styles.main_recipe_buttons}>
                <div>
                    {like === true && !own && <button className={styles.button_shallow} onClick={() => action('unlike')}>
                        <img alt={"Unlike the recipe"} className={styles.icon} src={"/heart-full.svg"} />
                    </button>}
                    {like === false && !own && <button className={styles.button_shallow} onClick={() => action('like')}>
                        <img alt={"Like the recipe"} className={styles.icon} src={"/heart.svg"} />
                    </button>}
                </div>
                {
                    own === true && <div>
                        {!! published && <button className={"button_primary"} onClick={() => action('unpublish')}>Un-publish</button>}
                        {! published && <button className={"button_primary"} onClick={() => action('publish')}>Publish</button>}
                        <Link href={`/EditRecipe?id=${recipeId}`}>
                            <button className={"button_primary"}>Edit recipe</button>
                        </Link>
                        <button className={"button_primary"} onClick={() => action('delete')}>Delete recipe</button>
                    </div>
                }
            </div>

            {_id && (
                <div key={_id}>
                    <div className={styles.main_recipe_banner}>
                        <img className={styles.recipe_img} src={recipe.coverPhoto || "/logo.svg"} alt="Image of the recipe"/>
                        <div className={styles.title_banner}>
                            <div className={styles.recipe_view_title}>{title}
                            </div>
                            <div className={styles.recipe_view_description}><Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>{description}</Link></div>

                            <div className={styles.recipe_view_time}><Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>Preparation time: {time} min</Link></div>
                            <br/>

                            <div className={styles.recipe_view_tags}><Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>{recipe.tags.map((tag: any, key: number) => <span
                                className={styles.recipe_view_tag} key={key}> #{tag} </span>)}</Link></div>
                            <br/>

                            {recipe.likedBy?.length > 0 && <div>Like(s): {recipe.likedBy.length}</div>}
                        </div>
                    </div>

                    <div className={styles.recipe_view_text}>
                        <div className={styles.recipe_view_ingredients}>
                            Ingredients:
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>
                                <ul>
                                    {ingredients.map((ingredient: string) => (
                                        <li key={ingredient}>{ingredient}</li>
                                    ))}
                                </ul>
                            </Link>
                        </div>
                        <div className={styles.recipe_view_steps}>
                            Steps to follow:
                            <Link style={{ textDecoration: 'none', color: 'black' }} href={`/recipe/${_id}`}>
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
