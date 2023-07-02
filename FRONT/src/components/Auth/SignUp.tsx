import * as React from 'react';

export default function SignUp() {
    return (
        <div className="signup-page">
            <div className="auth-form-container">
                <h1>SIGN UP</h1>
                <form className="auth-form">
                    <div className="auth-input"><input type="text" name="name" id="name" placeholder="Username" /></div>
                    <br></br>
                    <div className="auth-input"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <br></br>
                    <div className="auth-input"><input type="password" name="password" id="password" placeholder="Password"/></div>
                    <br></br>
                    <button className="auth-button" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
}