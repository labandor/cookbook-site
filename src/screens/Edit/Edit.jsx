import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCodingJob, editCodingJob } from "../services/codingjobs.js";


function Edit() {
    const [state, setState] = useState({
        img: "",
        title: "",
        includeIngredients: "",
        summary: "",
        instructionsRequired: true,
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
    // navigate(`/jobs/${id}`);
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
      <h1>Edit A Recipe!</h1>
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

export default Edit;
