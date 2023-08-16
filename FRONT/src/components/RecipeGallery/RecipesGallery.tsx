import * as React from 'react';
import {useContext, useEffect} from "react";
import Link from 'next/link';
import styles from "./RecipesGallery.module.css";
import { getAllRecipes } from '../../services/recipeService';
import MyContext from "../../context/MyContext";

export default function RecipesGallery(props: {
    title: string,
    userId?: string,
    favorites?: boolean,
}) {
    const [page, setPage] = React.useState(1);
    const [recipes, setRecipes] = React.useState<any>([]);
    const [nPages, setNPages] = React.useState<any>(1);
    const [search, setSearch] = React.useState("");

    const context:any = useContext(MyContext)

    function updateRecipies () {
        const fetchData = async () => {
            try {
                const response = await getAllRecipes(page, search, props.userId || "", props.favorites || false);
                setRecipes(response.data.data.recipes);
                setNPages(response.data.data.nPages);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }

    useEffect(() => {
        updateRecipies();
    }, [page]);

    if (recipes.length === 0) {
        return <div className={styles.gallery_page}>
            <div className={styles.before_gallery}>
                <h2 className={styles.gallery_page_title}>{props.title}</h2>
                <div>
                    No recipes found
                </div>
            </div>
        </div>
    }

    return (
        <div className={styles.gallery_page}>
            <div className={styles.before_gallery}>
                <h2 className={styles.gallery_page_title}>{props.title}</h2>
                <div>
                    <input className={styles.search_input} type="text" value={search} onChange={(e) => {
                        setSearch(e.target.value);
                    }} placeholder="Search for a recipe by its title..."/>
                    <button onClick={() => {
                        updateRecipies();
                    }}>Search</button>
                </div>
            </div>
            <div className={styles.gallery_main}>
                {recipes.map((recipe: any) => (
                    <div key={recipe._id} className={styles.gallery_card}>
                        <div className={styles.gallery_card_content}>
                            {!recipe.published && <div className={styles.gallery_card_draft}>Draft</div>}
                            {context?.globalState?.userId &&
                                (recipe.likedBy || []).includes(context?.globalState?.userId) &&
                                <div className={styles.gallery_card_liked}>Liked</div>}
                            <img className={styles.gallery_card_img} src={recipe.coverPhoto} alt="recipe-image"/>
                            <Link className={styles.gallery_card_title} href={`/recipes/${recipe._id}`}>{recipe.title}</Link>
                            <Link className={styles.gallery_card_tags}
                                  href={`/recipes/${recipe._id}`}>{recipe.tags.map((tag: any) => <span
                                className={styles.card_tags}> #{tag} </span>)}</Link></div>
                            <Link href={`/recipes/${recipe._id}`}><button className="button_primary">Open Recipe</button></Link>
                    </div>
                ))}
            </div>

            <div className={styles.pages_count_container}>
                {
                    nPages > 0 && recipes?.length > 0 && Array.from({length: nPages}, (_, i) => i + 1).map((i: number) => (
                        <button className={`${styles.pages_count_button} ${page === i ? styles.pages_count_button_selected : ""}`} onClick={() => setPage(i)}>{i}</button>
                    ))
                }
            </div>
        </div>
    );
}