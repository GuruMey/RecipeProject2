import http from "./httpService";

export async function createUser() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/createUser`);
}

export async function getAllUsers() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/getAllUsers`);
}

export async function getUserById(userId) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/getUserById/${userId}`);
}

export async function editUser(userId) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/editUser/${userId}`);
}

export async function deleteUser(userId) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/deleteUser/${userId}`);
}

