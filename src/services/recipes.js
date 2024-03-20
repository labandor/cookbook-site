import api from "./apiConfig.js";

export const getRecipes = async (req, res) => {
    try{
        let response = await api.get("/recipies")
        return response.data
    } catch (error) {
        console.error("error with getRecipes: ", error)
    }
}

export const getRecipe = async (id) => {
    try {
      const response = await api.get(`/recipies/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error Getting Recipe: ", error);
    }
  };

export const createRecipe = async (recipeData) => {
    try {
      const response = await api.post("/recipies", recipeData);
      console.log("im here");
      return response.data;
    } catch (error) {
      console.error("Error Creating Recipe: ", error);
    }
  };

export const editRecipe = async (id, recipeData) => {
    try {
      const response = await api.put(`/recipies/${id}`, recipeData);
      return response.data;
    } catch (error) {
      console.error("Error Editing Recipe: ", error);
    }
  };

export const deleteRecipe = async (id) => {
    try {
      const response = await api.delete(`/recipies/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error Deleting Recipe", error);
    }
  };
