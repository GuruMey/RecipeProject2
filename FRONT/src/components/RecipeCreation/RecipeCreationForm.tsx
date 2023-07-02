import * as React from 'react';
import styles from "./RecipeCreationForm.module.css"
import {useEffect, useState} from "react";


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

    const [formData, setFormData] = useState({});


    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const { title, time } = event.target.elements;
        const formData = {
            title: title.value,
            time: time.value,
            coverPhoto: coverPhoto,
            ingredients,
            steps,
            tags,
        };

        try {
            const response = await fetch('api/createRecipe/:recipeId', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Données enregistrées avec succès !');
            } else {
                console.error('Erreur lors de l\'enregistrement des données.');
            }
        } catch (error) {
            console.error('Erreur lors de la communication avec le serveur.', error);
        }
    };

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

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.recipe_title}>
                    <label>Recipe Title:</label>
                    <input className={styles.input_medium} type="text" name="title" />
                </div>

                <div className={styles.recipe_time}>
                    <label>Recipe Time (min):</label>
                    <input className={styles.input_short} type="number" name="time" />
                </div>

                <div className={styles.recipe_cover_photo}>
                    <label>Cover Photo:</label>
                    <input type="file" name="cover-photo" accept="image/*" onChange={CoverPhotoChange} />
                </div>

                <div className={styles.recipe_ingredients}>
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
                    <button className={styles.form_add_secondary_button} type="button" onClick={addIngredient}>
                        +
                    </button>
                    <ul className={styles.recipe_list}>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.recipe_steps}>
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
                    <button className={styles.form_add_secondary_button} type="button" onClick={addStep}>
                        +
                    </button>
                    <ul className={styles.recipe_list}>
                        {steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.recipe_tags}>
                    <label>Tags:</label>
                    <input className={styles.input_medium} value={tagInput} onChange={(e) => setTagInput(e.target.value)} type="text" name="tags" />
                    <button className={styles.form_add_secondary_button} type="button" onClick={addTag}>
                        +
                    </button>
                    <ul className={styles.recipe_list}>
                        {tags.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <div className={styles.button_container}>
                    <button className={styles.form_primary_button} type="submit">
                        Save
                    </button>
                    <div className={styles.form_primary_button}>Publish</div>
                </div>
            </form>
        </div>
    );
}