import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, editRecipe } from "../../services/recipes.js";

function Edit() {
 const [state, setState] = useState({
    image: "",
    title: "",
    cuisines: [],
    summary: "",
   /* steps: [
	    {
		    step:"",
		    ingredients:[],
	    }
    ],*/
  });

  const [step, setStep] = useState("")
  const [ingredient, setIngredient] = useState("")
  
	/*
  let ingredients = state.steps.map((step) => {
    let result = [];
    for (let i = 0; i < step.ingredients.length; i++) {
      if (!result.includes(step.ingredients[i])) {
        result.push(step.ingredients[i]);
      }
    }
    return result;
  }).toString();

  

  let instructions = state.steps.map((step) => {
      let result = [];
      result.push(step.step);
      return result;
    }).toString();
*/

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchRecipe() {
    const oneRecipe = await getRecipe(id);
    setState(oneRecipe);
    setStep(oneRecipe.steps.map((step1) => {
	    let result = [];
	    result.push(step1.step);
	    return result
    }).toString());

    setIngredient(oneRecipe.steps.map((step1) => {
	    let result = [];
	    for(let i = 0; i < step1.ingredients.length; i++) {
		    if(!result.includes(step.ingredients[i])) {
			    result.push(step.ingredients[i]);
		    }
	    }
	    return result;
    }).toString());
  }

  useEffect(() => {
    fetchRecipe();
  }, []);

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

	    await editRecipe(updatedState);
	    navigate(`/recipe/${id}`);
   }

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
          placeholder="Image URL"
          name="image"
          value={state.image}
          required
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="title"
          name="Title"
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
	  onChange={(e) => {
		  setIngredient(e.target.value)
	  }}
        />

        <input
          type="text"
          placeholder="summary"
          name="Summary"
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
	  onChange={(e) => {
		  setStep(e.target.value)
	  }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
