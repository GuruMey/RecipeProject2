import http from "./httpService";

export async function getAllUsers() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/user/getAllUsers`, {withCredentials: true});
}

export async function deleteUserApi(userId) {
    return http.delete(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/user/deleteUser/${userId}`, {withCredentials: true});
}

