import * as React from 'react';
import axios from "axios";

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
        <div className="login-page">
            <div className="auth-form-container" onSubmit={handleLogIn}>
                <h1>LOG IN</h1>
                <form className="auth-form">
                    <div className="auth-input"><input type="email" name="email" id="email" placeholder="Email" value={logInData.email} onChange={
                        (e)=> setLogInData((prevState) =>({...prevState, email: e.target.value}))} /></div>
                    <br></br>
                    <div className="auth-input"><input type="password" name="password" id="password" placeholder="Password" value={logInData.password} onChange={
                    (e)=> setLogInData((prevState)=> ({...prevState, password: e.target.value}))}/></div>
                    <br></br>
                    <button className="auth-button" type="submit">Log In</button>
                </form>
                <p>Not a member yet? Sign up <button onClick={() => props.setPageType('signup')}>here</button> </p>
            </div>
        </div>
    );
}