import * as React from 'react';
import "../../Styles/recipeform.css";


export default function RecipeForm() {


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
        <div className="main-form-container">

            <h1>CREATE A NEW RECIPE</h1>

            {/*--------------RECIPE TITLE-------------------*/}
            <div className="recipe-title">
                <form className="title-form">
                    <label> Recipe Title: </label>
                    <input className="input-medium" type="text" name="title" />
                </form> </div>

            {/*--------------TIME-------------------*/}
            <div className="recipe-time">
                <form className="time-form">
                    <label> Recipe Time (min): </label>
                    <input className="input-short" type="number" name="time" />
                </form>
            </div>
            {/*--------------PHOTO-------------------*/}
            <div className="recipe-cover-photo">
                <form className="cover-photo-form">
                    <label> Cover Photo: </label>
                    <input type="file" name="cover-photo" accept="image/*" onChange={handleCoverPhotoChange} />
                </form>
            </div>
            {/*--------------INGREDIENTS-------------------*/}
            <div className="recipe-ingredients">
                <form className="ingredients-form">
                    <label> Ingredients: </label> <br/>
                    <input className="input-medium" value={ingredientInput} onChange={(e)=>{setIngredientInput(e.target.value)}} type="text" name="ingredients" />
                    <button className="form-add-secondary-button" type="button" onClick={addIngredient}>+</button>
                </form>
                <div className="recipe-list"><ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul></div>
            </div>
            {/*--------------STEPS-------------------*/}
            <div className="recipe-steps">
                <form className="steps-form">
                    <label> Steps: </label> <br/>
                    <input className="input-long" value={stepInput} onChange={(e)=>{setStepInput(e.target.value)}} type="text" name="steps" />
                    <button className="form-add-secondary-button" type="button" onClick={addStep}>+</button>
                </form>
                <div className="recipe-list"><ul>
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul></div>
            </div>
            {/*--------------TAGS-------------------*/}
            <div className="recipe-tags">
                <form className="tags-form">
                    <label> Tags: </label>
                    <input value={tagInput} onChange={(e)=>{setTagInput(e.target.value)}} type="text" name="tags" />
                    <button className="form-add-secondary-button" type="button" onClick={addTag}>+</button>
                </form>
                <div className="recipe-list"><ul>
                    {tags.map((tag, index) => (
                        <li key={index}>{tag}</li>
                    ))}
                </ul></div>
            </div>
            {/*--------------BUTTON-------------------*/}
            <div className="button-container">
                <div className="form-add-primary-button ">Add Recipe</div>
            </div>
            <br/><br/><br/><br/>
        </div>

    );
}