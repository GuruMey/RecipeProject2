import * as React from 'react';
import axios from "axios";
import styles from "./auth.module.css"
import {useState} from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function LogIn(props: any) {
    const router = useRouter()

    const [logInData, setLogInData] = React.useState({
        email: "",
        password: ""
    });

    const [apiError, setApiError] = useState('');

    async function handleLogIn(e: any) {
        e.preventDefault();

        setApiError('')

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/auth/login`, logInData, {
                withCredentials: true
            })

            console.log(response.data)

            if (response.data.status === "success") {
                await router.push('/')
                router.reload();
            }
        } catch (error: any) {
            console.error(error)
            setApiError(error.response?.data?.error || 'An error occurred');
        }
    }

    return (
        <div className={styles.login_page}>
            <div className={styles.auth_form_container} onSubmit={handleLogIn}>
                <h2>LOG IN</h2>
                <form className={styles.auth_form}>
                    <input className="input_medium" type="email" name="email" id="email" placeholder="Email"
                           value={logInData.email} onChange={
                        (e) => setLogInData((prevState) => ({...prevState, email: e.target.value}))}/>
                    <br></br>
                    <input className="input_medium" type="password" name="password" id="password" placeholder="Password"
                           value={logInData.password} onChange={
                        (e) => setLogInData((prevState) => ({...prevState, password: e.target.value}))}/>
                    <br></br>
                    <button disabled={!logInData.email || !logInData.password} className="button_primary"
                            type="submit">Log In
                    </button>

                    {apiError && <p className={"colorError"}>{apiError}</p>}
                </form>
                <p>Not a member yet? Sign up <Link href={'/auth/signup'}>
                    <button className="button_secondary">
                        here
                    </button>
                </Link>
                </p>
            </div>
        </div>
    );
}