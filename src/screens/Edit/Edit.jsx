import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, editRecipe } from "../../services/recipes.js";


function Edit() {
    const [state, setState] = useState({
        img: "",
        title: "",
        ingredients: "",
        summary: "",
        instructions: "",
      });

  let { id } = useParams()
  let navigate = useNavigate();

  async function fetchRecipe() {
    const oneRecipe = await getRecipe(id)
    setState(oneRecipe)
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editRecipe(id, state);
    navigate(`/recipe/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Edit A Recipe!</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="img"
            name="img"
            value={state.img}
	    required
            onChange={handleChange}
        />

        <input
          type="text"
          placeholder="title"
          name="title"
          value={state.title}
	  required
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Ingredients"
          name="ingredients"
          value={state.ingredients}
	  required
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="summary"
          name="summary"
          value={state.summary}
	  required
          onChange={handleChange}
        />

        <input
          id="instructions required"
          type="checkbox"
          name="instructions required"
	  checked={state.instructions}
	  required
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
