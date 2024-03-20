import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, editRecipe } from "../../services/recipes.js";

function Edit() {
  const [state, setState] = useState({
    image: "",
    title: "",
    cuisines: [],
    steps: [
      {
        step: "",
        ingredients: [],
      },
    ],
    summary: "",
  });

  const ingredients = state.steps.map((step) => {
    let result = [];
    for (let i = 0; i < step.ingredients.length; i++) {
      if (!result.includes(step.ingredients[i])) {
        result.push(step.ingredients[i]);
      }
    }
    return result;
  });

  const instructions = state.steps
    .map((step) => {
      let result = [];
      result.push(step.step);
      return result;
    })
    .toString();

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchRecipe() {
    const oneRecipe = await getRecipe(id);
    setState(oneRecipe);
  }

  useEffect(() => {
    fetchRecipe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editRecipe(id, state);
	  console.log("sup");
    navigate(`/browse`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "ingredients" || name !== "instructions") {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else if (name === "ingredients") {
      setState((prevState) => ({
        ...prevState,
        [state.steps[0].ingredients[0]]: value,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [state.steps[0].step]: value,
      }));
    }
  };

  return (
    <div>
      <h1>Edit A Recipe!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="img"
          name="image"
          value={state.image}
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
          value={ingredients}
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
          type="text"
          name="instructions"
          value={instructions}
          required
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
