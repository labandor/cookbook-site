import api from "./apiConfig.js";


export let getRecipes = async (req, res) => {
    try{
        let response = await api.get("/codingjobs")
        return response.data
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message }) 
    }
}

export const getRecipe = async (id) => {
    try {
      const response = await api.get(`/codingjobs/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error Getting Recipe: ", error);
    }
  };

export const createRecipe = async (recipeData) => {
    try {
      const response = await api.post("/codingjobs", recipeData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

export const editRecipe = async (id, recipeData) => {
    try {
      const response = await api.put(`/codingjobs/${id}`, recipeData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

export const deleteRecipe = async (id) => {
    try {
      const response = await api.delete(`/codingjobs/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };