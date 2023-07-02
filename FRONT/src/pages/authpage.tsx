import * as React from 'react';
import LogIn from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";

export default function LoginPage() {
    const [pageType, setPageType] = React.useState("login")

    return (
        <div className="login-body">

            {pageType==='login'&&<LogIn setPageType={setPageType}/>}
            {pageType==='signup'&&<SignUp setPageType={setPageType}/>}

        </div>
    );
}