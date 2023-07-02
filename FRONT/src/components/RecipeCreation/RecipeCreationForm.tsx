import * as React from 'react';
import styles from "./RecipeCreationForm.module.css"


 export default function RecipeCreationForm() {


    // Initialise un état pour gérer le contenu de l'input qui va servir à ajouter le prochain ingrédient, étape ou tag :
    const [ingredientInput, setIngredientInput] = React.useState<string>('');
    const [stepInput, setStepInput] = React.useState<string>('');
    const [tagInput, setTagInput] = React.useState<string>('');


    // Initialise un état pour gérer la liste d'ingrédients, d'étapes et de tags :
    const [coverPhoto, setCoverPhoto] = React.useState<File | null>(null);
    const [ingredients, setIngredients] = React.useState<string[]>([]);
    const [steps, setSteps] = React.useState<string[]>([]);
    const [tags, setTags] = React.useState<string[]>([]);


    //Définit des fonctions pour gérer les événements du formulaire :
    const handleCoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setCoverPhoto(event.target.files[0]);
        }
    };

    const addIngredient = () => {
        setIngredients([...ingredients, ingredientInput]);
        setIngredientInput('');
    };

    const addStep = () => {
        setSteps([...steps, stepInput]);
        setStepInput('');
    };

    const addTag = () => {
        setTags([...tags, tagInput]);
        setTagInput('');
    };

    return (
        <div className={styles.main_form_container}>
            <div className={styles.recipe_form_title}>
            <h2>Create a new recipe</h2>
            </div>

            <div className={styles.form}>
            {/*--------------RECIPE TITLE-------------------*/}
            <div className={styles.recipe_title}>
                <form className={styles.title_form}>
                    <label> Recipe Title: </label>
                    <input className={styles.input_medium} type="text" name="title" />
                </form> </div>

            {/*--------------TIME-------------------*/}
            <div className={styles.recipe_time}>
                <form className={styles.time_form}>
                    <label> Recipe Time (min): </label>
                    <input className={styles.input_short} type="number" name="time" />
                </form>
            </div>
            {/*--------------PHOTO-------------------*/}
            <div className={styles.recipe_cover_photo}>
                <form className={styles.cover_photo_form}>
                    <label> Cover Photo: </label>
                    <input type="file" name="cover-photo" accept="image/*" onChange={handleCoverPhotoChange} />
                </form>
            </div>
            {/*--------------INGREDIENTS-------------------*/}
            <div className={styles.recipe_ingredients}>
                <form className={styles.ingredients_form}>
                    <label> Ingredients: </label> <br/>
                    <input className={styles.input_medium} value={ingredientInput} onChange={(e)=>{setIngredientInput(e.target.value)}} type="text" name="ingredients" />
                    <button className={styles.form_add_secondary_button} type="button" onClick={addIngredient}>+</button>
                </form>
                <div className={styles.recipe_list}><ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul></div>
            </div>
            {/*--------------STEPS-------------------*/}
            <div className={styles.recipe_steps}>
                <form className={styles.steps_form}>
                    <label> Steps: </label> <br/>
                    <input className={styles.input_long} value={stepInput} onChange={(e)=>{setStepInput(e.target.value)}} type="text" name="steps" />
                    <button className={styles.form_add_secondary_button} type="button" onClick={addStep}>+</button>
                </form>
                <div className={styles.recipe_list}><ul>
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul></div>
            </div>
            {/*--------------TAGS-------------------*/}
            <div className={styles.recipe_tags}>
                <form className={styles.tags_form}>
                    <label> Tags: </label>
                    <input value={tagInput} onChange={(e)=>{setTagInput(e.target.value)}} type="text" name="tags" />
                    <button className={styles.form_add_secondary_button} type="button" onClick={addTag}>+</button>
                </form>
                <div className={styles.recipe_list}><ul>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul></div>
            </div>
            </div>
            {/*--------------BUTTON-------------------*/}
            <div className={styles.button_container}>
                <div className={styles.form_primary_button}>Save </div>
                <div className={styles.form_primary_button}>Publish </div>
            </div>
            <br/><br/><br/><br/>
        </div>

    );
}