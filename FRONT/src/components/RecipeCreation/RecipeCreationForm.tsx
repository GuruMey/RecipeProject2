import * as React from 'react';
import styles from "./RecipeCreationForm.module.css"
import {useEffect, useState} from "react";
import getInvalidFieldsForNewRecipes from "./getInvalidFieldsForNewRecipes";


export default function RecipeCreationForm() {

    // Initialise un état pour gérer la liste d'ingrédients, d'étapes et de tags :
    const [coverPhoto, setCoverPhoto] = React.useState<File | null>(null);

    const [formData, setFormData] = useState<any>({
        title: '',
        description: '',
        time: '',
        coverPhoto: '',
        ingredients: [],
        steps: [],
        tags: [],
    });

    const [newIngredient, setNewIngredient] = useState<string>('');
    const [newStep, setNewStep] = useState<string>('');
    const [newTag, setNewTag] = useState<string>('');

    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const errors = getInvalidFieldsForNewRecipes(formData);

        if (errors.length > 0) {
            setShowErrors(true);
            return;
        }
    }


    const CoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setCoverPhoto(event.target.files[0]);
        }
    };


    return (
        <div className="main_form_container">
            <div className="recipe_form_title">
                <h2>Create a new recipe</h2>
            </div>

            <form className="form" >
                <div className={styles.input_button_field_container}>
                    <label>Recipe Title:</label>
                    <input className="input_medium" type="text" name="title" value={formData.title} onChange={(e)=>{
                        setFormData({...formData, title: e.target.value})
                    }} />
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('title') && showErrors && <>Invalid title</>}

                <div className={styles.input_button_field_container}>
                    <label>Short description:</label>
                    <input className="input_medium" type="text" name="description" value={formData.description} onChange={(e)=>{
                        setFormData({...formData, description: e.target.value})
                    }} />
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('description') && showErrors && <>Invalid description</>}

                <div className={styles.input_button_field_container}>
                    <label>Recipe Time (min):</label>
                    <input className="input_short" type="number" name="time" value={formData.time} onChange={(e) => {
                        setFormData({...formData, time: e.target.value})
                    }
                    }/>
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('time') && showErrors && <>Invalid time</>}

                <div className={styles.input_button_field_container}>
                    <label>Cover Photo:</label>
                    <input type="file" name="cover-photo" accept="image/*" onChange={CoverPhotoChange} />
                </div>

                <div className={styles.input_button_field_container}>
                    <label>Ingredients:</label>
                    <div className="recipe_fields">
                        <input
                            className="input_medium"
                            value={newIngredient}
                            onChange={(e) => {
                                setNewIngredient(e.target.value);
                            }}
                            type="text"
                            name="ingredients"
                        />
                        <button className="plus_button" type="button" onClick={() => {
                            setFormData((prevState: any) => ({
                                ...prevState,
                                ingredients: [...prevState.ingredients, newIngredient]
                            }))
                            setNewIngredient('');
                        }}
                                disabled={(newIngredient.length<1 )}
                        >+</button>
                    </div>
                    {formData.ingredients.length !== 0 && <div className={styles.recipe_list_container}>
                        <ul className={styles.recipe_list}>
                            {formData.ingredients.map((ingredient: string, index: number) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div> }
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('ingredients') && showErrors && <>Invalid ingredients</>}


                <div className={styles.input_button_field_container}>
                    <label>Steps:</label>
                    <div className="recipe_fields">
                        <input
                            className="input_long"
                            value={newStep}
                            onChange={(e) => {
                                setNewStep(e.target.value);
                            }}
                            type="text"
                            name="steps"
                        />
                        <button className="plus_button" type="button" onClick={() => {
                            setFormData((prevState: any) => ({
                                ...prevState,
                                steps: [...prevState.steps, newStep]
                            }))
                            setNewStep('');
                        }}
                                disabled={(newStep.length<1 )}
                        >+</button>
                    </div>
                    {formData.steps.length !== 0 && <div className={styles.recipe_list_container}>
                        <ul className={styles.recipe_list}>
                            {formData.steps.map((steps: string, index: number) => (
                                <li key={index}>{steps}</li>
                            ))}
                        </ul>
                    </div>}
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('steps') && showErrors && <>Invalid steps</>}


                <div className={styles.input_button_field_container}>
                    <label>Tags:</label>
                    <div className="recipe_fields">
                        <input className="input_medium"
                               value={newTag}
                               onChange={(e) => {
                                   setNewTag(e.target.value);
                               }}
                               type="text"
                               name="tags"
                        />
                        <button className="plus_button" type="button" onClick={()=> {
                            setFormData((prevState: any) => ({
                                ...prevState,
                                tags: [...prevState.tags, newTag]
                            }))
                            setNewTag('');
                        }} disabled={(formData.tags.length>=3 || newTag.length<1 )}>
                            +
                        </button>
                    </div>
                    {formData.tags.length !== 0 && <div className={styles.recipe_list_container}>
                    <ul className={styles.recipe_list}>
                        {formData.tags.map((tag:string, index:number) => (
                            <li key={index}>{tag}</li>
                        ))}
                    </ul>
                    </div> }
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('tags') && showErrors && <>Invalid tags</>}


                <div className="button_container">
                    <button className="button_primary" type="submit" onClick={handleSubmit}>
                        Save
                    </button>
                    <button className="button_primary" type="submit" onClick={handleSubmit}>
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
}
