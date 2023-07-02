import * as React from 'react';
import axios from "axios";
import styles from "./auth.module.css";



function isPasswordValid(password:string) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*-_])[A-Za-z\d!@#$%^&*-_]{8,}$/;
    return reg.test(password);
}
export default function SignUp(props:any) {
    const [signUpData, setSignUpData] = React.useState({
        username: "",
        email: "",
        password: ""
    });
    async function handleSignUp(e:any) {
        e.preventDefault();
        if(!isPasswordValid(signUpData.password)) {
            alert('invalid password format');
            return
        }
        alert("Sign up form submitted")


        // requete au serveur avec axios
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/auth/signup`, signUpData)

            console.log(response.data);
            alert("Sign up successful")
            props.setPageType('login');
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <div className={styles.signup_page}>
            <div className={styles.auth_form_container}>
                <h2>SIGN UP</h2>
                <form className={styles.auth_form} onSubmit={handleSignUp}>
                    <div className={styles.auth_input}><input type="text" name="username" id="username" placeholder="Username" value={signUpData.username} onChange={
                        (e)=> setSignUpData((prevState)=> ({...prevState, username: e.target.value}))}/></div>
                    <br></br>
                    <div className={styles.auth_input}><input type="email" name="email" id="email" placeholder="Email" value={signUpData.email} onChange={
                        (e)=> setSignUpData((prevState)=> ({...prevState, email: e.target.value}))}/></div>
                    <br></br>
                    <div className={styles.auth_input}><input type="password" name="password" id="password" placeholder="Password" value={signUpData.password} onChange={
                        (e)=> setSignUpData((prevState)=> ({...prevState, password: e.target.value}))}/></div>
                    <br></br>
                    <button className={styles.auth_button} type="submit">Sign Up</button>
                </form>
                <p>Already have an account? Log in <button onClick={() => props.setPageType('login')}>here</button> </p>

            </div>
        </div>
    );
}