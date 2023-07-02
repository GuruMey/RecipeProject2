import http from "./httpService";

export async function getAllRecipes() {
    //get and return a list of recipes from the server
    return http.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/api/recipe`);
}

export async function getRecipeById(id) {
    //get and return a single recipe from the server
    return http.get(`http://localhost:3000/recipes/${recipeId}`);
}
