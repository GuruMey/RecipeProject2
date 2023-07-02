import * as React from 'react';
import styles from "./RecipeCreationForm.module.css"
import {useEffect, useState} from "react";
import getInvalidFieldsForNewRecipes from "./getInvalidFieldsForNewRecipes";


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

    const [formData, setFormData] = useState({
        title: '',
        time: '',
        coverPhoto: '',
        ingredients: [],
        steps: [],
        tags: [],
    });

    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const errors = getInvalidFieldsForNewRecipes(formData);

        if (errors.length > 0) {
            setShowErrors(true);
            alert('errors');
            return;
        }
    }


    const CoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

            <form className={styles.form} >
                <div className={styles.recipe_title}>
                    <label>Recipe Title:</label>
                    <input className={styles.input_medium} type="text" name="title" value={formData.title} onChange={(e)=>{
                        setFormData({...formData, title: e.target.value})
                    }} />
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('title') && showErrors && <>Invalid title</>}

                <div className={styles.recipe_time}>
                    <label>Recipe Time (min):</label>
                    <input className={styles.input_short} type="number" name="time" />
                </div>

                <div className={styles.recipe_cover_photo}>
                    <label>Cover Photo:</label>
                    <input type="file" name="cover-photo" accept="image/*" onChange={CoverPhotoChange} />
                </div>

                <div className={styles.recipe_ingredients}>
                    <div className={styles.recipe_fields}>
                    <label>Ingredients:</label>
                    <input
                        className={styles.input_medium}
                        value={ingredientInput}
                        onChange={(e) => {
                            setIngredientInput(e.target.value);
                        }}
                        type="text"
                        name="ingredients"
                    />
                    <button className={styles.plus_button} type="button" onClick={addIngredient}>+</button>
                    </div>
                    <div className={styles.recipe_ingredients_list}>
                    <ul className={styles.recipe_list}>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    </div>
                </div>

                <div className={styles.recipe_steps}>
                    <div className={styles.recipe_fields}>
                    <label>Steps:</label>
                    <input
                        className={styles.input_long}
                        value={stepInput}
                        onChange={(e) => {
                            setStepInput(e.target.value);
                        }}
                        type="text"
                        name="steps"
                    />
                    <button className={styles.plus_button} type="button" onClick={addStep}>+</button>
                    </div>
                    <div className={styles.recipe_steps_list}>
                    <ul className={styles.recipe_list}>
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                    </div>
                </div>

                <div className={styles.recipe_tags}>
                    <div className={styles.recipe_fields}>
                    <label>Tags:</label>
                    <input className={styles.input_medium} value={tagInput} onChange={(e) => setTagInput(e.target.value)} type="text" name="tags" />
                    <button className={styles.plus_button} type="button" onClick={addTag}>
                        +
                    </button>
                    </div>
                    <ul className={styles.recipe_list}>
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.button_container}>
                    <button className={styles.form_primary_button} type="submit" onClick={handleSubmit}>
                        Save
                    </button>
                    <div className={styles.form_primary_button}>Publish</div>
                </div>
            </form>
        </div>
    );
}