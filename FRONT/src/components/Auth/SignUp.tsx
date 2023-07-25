import * as React from 'react';
import axios from "axios";
import styles from "./auth.module.css";
import getInvalidFieldsForNewRecipes from "../RecipeCreation/getInvalidFieldsForNewRecipes";
import {useState} from "react";
import Link from "next/link";

function isPasswordValid(password:string) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{8,}$/;
    return reg.test(password);
}

function getSignUpDataInvalidFields(signUpData: any) {
    const invalidFields = [];
    // todo meyrav: ajouter des regles plus complexes

    if(!signUpData.username) {
        invalidFields.push('username')
    }

    if(!signUpData.email) {
        invalidFields.push('email')
    }

    if(!isPasswordValid(signUpData.password)) {
        invalidFields.push('password')
    }

    return invalidFields;
}

export default function SignUp(props:any) {
    const [signUpData, setSignUpData] = React.useState({
        username: "",
        email: "",
        password: ""
    });

    const [showErrors, setShowErrors] = useState(false);
    const [apiError, setApiError] = useState('');
    const [success, setSuccess] = useState(false);

    async function handleSignUp(e:any) {
        e.preventDefault();

        setApiError('')
        setSuccess(false)

        const errors = getSignUpDataInvalidFields(signUpData);

        if(errors.length !== 0) {
            setShowErrors(true);
            return;
        }

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/auth/signup`, signUpData, {
                withCredentials: true
            })

            setSuccess(true)
        } catch (error: any) {
            console.error(error);
            setApiError(error.response?.data?.error || 'An error occurred');
        }
    }

    return (
        <div className={styles.signup_page}>
            <div className={styles.auth_form_container}>
                <h2>SIGN UP</h2>

                <form className={styles.auth_form} onSubmit={handleSignUp}>
                    <input className="input_medium"  type="text" name="username" id="username" placeholder="Username" value={signUpData.username} onChange={
                        (e)=> setSignUpData((prevState)=> ({...prevState, username: e.target.value}))}/>

                    {getSignUpDataInvalidFields(signUpData).includes('username') && showErrors && <>Invalid username</>}

                    <br></br>

                    <input className="input_medium"  type="email" name="email" id="email" placeholder="Email" value={signUpData.email} onChange={
                        (e)=> setSignUpData((prevState)=> ({...prevState, email: e.target.value}))}/>

                    {getSignUpDataInvalidFields(signUpData).includes('email') && showErrors && <>Invalid email</>}

                    <br></br>

                    <input className="input_medium"  type="password" name="password" id="password" placeholder="Password" value={signUpData.password} onChange={
                        (e)=> setSignUpData((prevState)=> ({...prevState, password: e.target.value}))}/>

                    {getSignUpDataInvalidFields(signUpData).includes('password') && showErrors && <>Invalid password<br/></>}

                    <br/>

                    <div>
                        <div className={styles.password_rules}>Rules For the password:</div>
                        <ul className={styles.password_rules}>
                            <li>It must be at least 8 characters long.</li>
                            <li>It must contain at least one lowercase letter.</li>
                            <li>It must contain at least one uppercase letter.</li>
                            <li>It must contain a sequence of at least 4 digits.</li>
                            <li>It must contain at least one of those special character:<br/> !, @, #, $, %, ^, &, *, -, and _.</li>
                        </ul>
                    </div>

                    <button className="button_primary" type="submit">Sign Up</button>

                    {apiError && <p className={"colorError"}>{apiError}</p>}

                    {success && <p className={"colorSuccess"}>Account created successfully, you can now login.</p>}
                </form>

                <p>Already have an account? Log in <Link href={'/auth/login'}>
                    <button className="button_secondary">
                        here
                    </button>
                </Link> </p>

            </div>
        </div>
    );
}