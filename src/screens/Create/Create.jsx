import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../services/recipes.js";
import './Create.css';

function Create() {
  const [state, setState] = useState({
    img: "",
    title: "",
    ingredients: "",
    summary: "",
    instructions: ""
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(state);
    navigate("/recipes");
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
          id="instructions"
          type="text"
          name="instructions"
          value={state.instructions}
	  required
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;
