import * as React from 'react';

export default function LogIn(props:any) {
    return (
        <div className="login-page">
            <div className="auth-form-container">
                <h1>LOG IN</h1>
                <form className="auth-form">
                    <div className="auth-input"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <br></br>
                    <div className="auth-input"><input type="password" name="password" id="password" placeholder="Password"/></div>
                    <br></br>
                    <button className="auth-button" type="submit">Log In</button>
                </form>
                <p>Not a member yet? Sign up <button onClick={() => props.setPageType('signup')}>here</button> </p>
            </div>
        </div>
    );
}