import http from "./httpService";

export async function signUp() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/signup`);
}

export async function logIn() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/login`);
}

export async function signOut() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/signout`);
}