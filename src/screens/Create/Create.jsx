import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/recipes.js";
import './Create.css';

function Create() {
  const [state, setState] = useState({
    image: "",
    title: "",
    cuisines: [],
    steps: [{
	step: "",
	ingredients: [],
    }],
    summary: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(state);
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
          name="steps[0].ingredients[0]"
          value={state.steps[0].ingredients[0]}
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
	  placeholder="instructions"
          name="steps[0].step"
          value={state.steps[0].step}
	  required
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
