import http from "./httpService";

export async function rating() {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/ratings`);
}

export async function ratingByRecipe(recipeId) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/ratings/${recipeId}`);
} 
