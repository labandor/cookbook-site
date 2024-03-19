import api from "./apiConfig.js";

export const getRecipes = async (req, res) => {
    try{
        let response = await api.get("/recipes")
        return response.data
    } catch (error) {
        console.error("error with getRecipes: ", error)
    }
}

export const getRecipe = async (id) => {
    try {
      const response = await api.get(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error Getting Recipe: ", error);
    }
  };

export const createRecipe = async (recipeData) => {
    try {
      const response = await api.post("/recipes", recipeData);
      return response.data;
    } catch (error) {
      console.error("Error Creating Recipe: ", error);
    }
  };

export const editRecipe = async (id, recipeData) => {
    try {
      const response = await api.put(`/recipes/${id}`, recipeData);
      return response.data;
    } catch (error) {
      console.error("Error Editing Recipe: ", error);
    }
  };

export const deleteRecipe = async (id) => {
    try {
      const response = await api.delete(`/recipes/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error Deleting Recipe", error);
    }
  };
