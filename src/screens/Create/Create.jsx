import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { createCodingJob } from "../services/codingjobs.js";

function Create() {
  const [state, setState] = useState({
    img: "",
    title: "",
    includeIngredients: "",
    summary: "",
    instructionsRequired: true,
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecipe(job);
    // navigate("/Jobs");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: checked,
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
            onChange={handleChange}
        />

        <input
          type="text"
          placeholder="title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="include Ingredients"
          name="include Ingredients"
          value={state.includeIngredients}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="summary"
          name="summary"
          value={state.summary}
          onChange={handleChange}
        />
        <div>
          <label htmlFor="relocation-box">
            Instructions Required
            <input
              id="instructions required"
              type="checkbox"
              name="instructions required"
              checked={state.instructionsRequired}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Create;