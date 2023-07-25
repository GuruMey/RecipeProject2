import http from "./httpService";

export async function getAllRecipes(page, search, userId, favorites) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe?page=${page}&search=${encodeURIComponent(search)}&userId=${userId}&favorites=${favorites}`);
}

export async function getRecipeById(recipeId) {
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/getRecipe/${recipeId}`);
}

export async function createRecipe() {
    return http.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/createRecipe`);
}

export async function publishRecipe(recipeId) {
    return http.post(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/publishRecipe/${recipeId}`);
}

export async function editRecipe(recipeId) {
    return http.patch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/editRecipe/${recipeId}`);
}

export async function deleteRecipe(recipeId) {
    return http.delete(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe/deleteRecipe/${recipeId}`);
}






