import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/recipes.js";
import "./Create.css";

function Create() {
  const [state, setState] = useState({
    image: "",
    title: "",
    cuisine: "",
    summary: "",
    steps: [],
    ingredients: [],
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(state);
    navigate("/browse");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "steps") {
      setState((prevState) => ({
        ...prevState,
        [name]: value.split("."),
      }));
    } else if (name === "ingredients") {
      setState((prevState) => ({
        ...prevState,
        [name]: value.split(","),
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      <h1>Add a Recipe in our Cook Book!</h1>
      <form className="form-container1" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="image url"
          name="image"
          value={state.image}
          required
          onChange={handleChange}
          className="circular-input"
        />
        <input
          type="text"
          placeholder="Cuisine"
          name="cuisine"
          value={state.cuisine}
          required
          onChange={handleChange}
          className="circular-input"
        />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={state.title}
          required
          onChange={handleChange}
          className="circular-input"
        />
        <input
          type="text"
          placeholder="Ingredients"
          name="ingredients"
          value={state.ingredients.toString()}
          required
          onChange={handleChange}
          className="circular-input"
        />
        <input
          type="text"
          placeholder="Summary"
          name="summary"
          value={state.summary}
          required
          onChange={handleChange}
          className="circular-input"
        />
        <input
          type="text"
          placeholder="Instructions"
          name="steps"
          value={state.steps.join(".")}
          required
          onChange={handleChange}
          className="circular-input"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
