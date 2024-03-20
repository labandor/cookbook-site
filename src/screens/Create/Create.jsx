import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/recipes.js";
import "./Create.css";

function Create() {
  const [state, setState] = useState({
    image: "",
    title: "",
    cuisines: [],
    summary: "",
  });

  const [step, setStep] = useState("")
  const [ingredient, setIngredient] = useState("")

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedState = {
      ...state,
      steps: [
        {
          step: step,
          ingredients: [ingredient]
        }
      ]
    }

    await createRecipe(updatedState);
    navigate("/browse");
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
      <h1>Add a Recipe in our Cook Book!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="image url"
          name="image"
          value={state.image}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Title"
          name="title"
          value={state.title}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Ingredients"
          name="ingredient"
          value={ingredient}
          required
          onChange={(e) => setIngredient(e.target.value)}
        />

        <input
          type="text"
          placeholder="Summary"
          name="summary"
          value={state.summary}
          required
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Instructions"
          name="step"
          value={step}
          required
          onChange={(e) => setStep(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
