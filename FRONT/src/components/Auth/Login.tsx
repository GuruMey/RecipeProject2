import * as React from 'react';
import axios from "axios";
import styles from "./auth.module.css"

export default function LogIn(props:any) {
    const [logInData, setLogInData] = React.useState({
        email: "",
        password: ""
    });

    async function handleLogIn(e:any) {
        e.preventDefault();
        alert("Login form submitted")

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
                    <div className={styles.auth_input}><input type="email" name="email" id="email" placeholder="Email" value={logInData.email} onChange={
                        (e)=> setLogInData((prevState) =>({...prevState, email: e.target.value}))} /></div>
                    <br></br>
                    <div className={styles.auth_input}><input type="password" name="password" id="password" placeholder="Password" value={logInData.password} onChange={
                    (e)=> setLogInData((prevState)=> ({...prevState, password: e.target.value}))}/></div>
                    <br></br>
                    <button className={styles.auth_button} type="submit">Log In</button>
                </form>
                <p>Not a member yet? Sign up <button onClick={() => props.setPageType('signup')}>here</button> </p>
            </div>
        </div>
    );
}