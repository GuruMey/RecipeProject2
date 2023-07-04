import * as React from 'react';
import styles from "./RecipeCreationForm.module.css"
import {useEffect, useState} from "react";
import getInvalidFieldsForNewRecipes from "./getInvalidFieldsForNewRecipes";
import axios from "axios";


export default function RecipeCreationForm(props: any) {
    // const [coverPhoto, setCoverPhoto] = React.useState<File | null>(null);

    const [formData, setFormData] = useState<any>({
        title: '',
        description: '',
        time: 0,
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

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe`, {
                ...formData
            }, {
                withCredentials: true
            })

            // todo: user info

            return response.data?.data?.id;
        } catch(error) {
            console.log(error)
            // todo: show error in ui
        }
    }

    const handleSubmitAndPublish = async (event: any) => {
        event.preventDefault();

        const id = await handleSubmit(event);

        if (id) {
            try {
                await axios.patch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/publish/${id}`, {
                    published: true
                }, {
                    withCredentials: true
                })
            } catch(error) {
                console.log(error)
                // todo: show error in ui
            }
        }

        // todo: perform redirect
    }

    // const CoverPhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (event.target.files && event.target.files[0]) {
    //         setCoverPhoto(event.target.files[0]);
    //     }
    // };

    const deleteIngredient = (index: number) => {
        setFormData((prevState: any) => ({
            ...prevState,
            ingredients: prevState.ingredients.filter((_: any, i: number) => i !== index)
        }))
    }

    const deleteStep = (index: number) => {
        setFormData((prevState: any) => ({
            ...prevState,
            steps: prevState.steps.filter((_: any, i: number) => i !== index)
        }))
    }

    const deleteTag = (index: number) => {
        setFormData((prevState: any) => ({
            ...prevState,
            tags: prevState.tags.filter((_: any, i: number) => i !== index)
        }))
    }

    return (
        <div className="main_form_container">
            <div className="recipe_form_title">
                <h2>Create a new recipe</h2>
            </div>

            <form className="form" onSubmit={(e) => e.preventDefault()} >
                <div className={styles.input_button_field_container}>
                    <label>Choose a name for your recipe: *</label>
                    <input className="input_medium" type="text" name="title" value={formData.title} onChange={(e)=>{
                        setFormData({...formData, title: e.target.value})
                    }} />
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('title') && showErrors && <div className={"colorError"}>Invalid title</div>}

                <div className={styles.input_button_field_container}>
                    <label>Describe your recipe:</label>
                    <input className="input_medium" type="text" name="description" value={formData.description} onChange={(e)=>{
                        setFormData({...formData, description: e.target.value})
                    }} />
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('description') && showErrors && <div className={"colorError"}>Invalid description</div>}

                <div className={styles.input_button_field_container}>
                    <label>Time to cook (min): *</label>
                    <input className="input_short" type="number" name="time" value={formData.time} onChange={(e) => {
                        setFormData({...formData, time: parseInt(e.target.value)})
                    }
                    }/>
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('time') && showErrors && <div className={"colorError"}>Invalid time</div>}

                {/*<div className={styles.input_button_field_container}>*/}
                {/*    <label>Cover Photo:</label>*/}
                {/*    <input type="file" name="cover-photo" accept="image/*" onChange={CoverPhotoChange} />*/}
                {/*</div>*/}

                <div className={styles.input_button_field_container}>
                    <label>Ingredients: *</label>
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
                                <li key={index}>{ingredient} <button onClick={() => deleteIngredient(index)}>delete</button></li>
                            ))}
                        </ul>
                    </div> }
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('ingredients') && showErrors && <div className={"colorError"}>Invalid ingredients</div>}

                <div className={styles.input_button_field_container}>
                    <label>Steps: *</label>
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
                                <li key={index}>{steps}  <button onClick={() => deleteStep(index)}>delete</button></li>
                            ))}
                        </ul>
                    </div>}
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('steps') && showErrors && <div className={"colorError"}>Invalid steps</div>}

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
                            <li key={index}>{tag}  <button onClick={() => deleteTag(index)}>delete</button></li>
                        ))}
                    </ul>
                    </div> }
                </div>

                {getInvalidFieldsForNewRecipes(formData).includes('tags') && showErrors && <div className={"colorError"}>Invalid tags</div>}

                <div className="button_container">
                    <button className="button_primary" type="submit" onClick={handleSubmit}>
                        Save (without publishing)
                    </button>
                    <button className="button_primary" type="submit" onClick={handleSubmitAndPublish}>
                        Save & Publish
                    </button>
                </div>
            </form>
        </div>
    );
}
