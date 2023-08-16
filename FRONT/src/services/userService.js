import http from "./httpService";

export async function getAllUsers(page) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/user/getAllUsers?page=${page}`, {withCredentials: true});
}

export async function deleteUserApi(userId) {
    return http.delete(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/user/deleteUser/${userId}`, {withCredentials: true});
}

