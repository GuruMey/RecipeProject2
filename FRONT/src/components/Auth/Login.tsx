import * as React from 'react';
import axios from "axios";
import styles from "./auth.module.css"
import {useState} from "react";


function getLoginDataInvalidFields(loginData: any) {
    const invalidFields = [];

    if(!loginData.email) {
        invalidFields.push('email')
    }

    if(!loginData.password) {
        invalidFields.push('password')
    }

    return invalidFields;
}
export default function LogIn(props:any) {
    const [logInData, setLogInData] = React.useState({
        email: "",
        password: ""
    });

    const [showErrors, setShowErrors] = useState(false);

    const [apiError, setApiError] = useState('');

    const [success, setSuccess] = useState(false);


    async function handleLogIn(e:any) {
        e.preventDefault();

        setApiError('')

        alert("Login form submitted")

        const errors = getLoginDataInvalidFields(logInData);

        if(errors.length !== 0) {
            setShowErrors(true);
            return;
        }

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/auth/login`, logInData, {
                withCredentials: true
            })

            console.log(response.data);
            alert("Logged in successfully")
            props.setPageType('SignUp');
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.login_page}>
            <div className={styles.auth_form_container} onSubmit={handleLogIn}>
                <h2>LOG IN</h2>
                <form className={styles.auth_form}>
                        <input className="input_medium" type="email" name="email" id="email" placeholder="Email" value={logInData.email} onChange={
                        (e)=> setLogInData((prevState) =>({...prevState, email: e.target.value}))} />
                    <br></br>
                        <input className="input_medium" type="password" name="password" id="password" placeholder="Password" value={logInData.password} onChange={
                    (e)=> setLogInData((prevState)=> ({...prevState, password: e.target.value}))}/>
                    <br></br>
                    <button disabled={!logInData.email || !logInData.password} className="button_primary" type="submit">Log In</button>
                </form>
                <p>Not a member yet? Sign up <button className="button_secondary" onClick={() => props.setPageType('signup')}>here</button> </p>
            </div>
        </div>
    );
}