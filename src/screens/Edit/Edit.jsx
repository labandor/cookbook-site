// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { getRecipe, editRecipe } from "../../services/recipes.js";

// function Edit() {
//   const [state, setState] = useState({
//     image: "",
//     title: "",
//     cuisines: [],
//     steps: [],
//     ingredients: [],
//     summary: "",
//   });

//   let { id } = useParams();
//   let navigate = useNavigate();

//   async function fetchRecipe() {
//     const oneRecipe = await getRecipe(id);
//     setState(oneRecipe);
//   }

//   useEffect(() => {
//     fetchRecipe();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await editRecipe(id, state);
//     navigate(`/recipe/${id}`);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name !== "ingredients" && name !== "steps") {
//       setState((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//       console.log(name)
//     } else if (name === "ingredients") {
//       setState((prevState) => ({
//         ...prevState,
//         [name]: value.split(","),
//       }))
//       console.log(state);
//     } else {
//       setState((prevState) => ({
//         ...prevState,
//         [name]: value.split("."),
//       }));
//       console.log(state)
//     }
//   };

//   return (
//     <div>
//       <h1>Edit A Recipe!</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="img"
//           name="image"
//           value={state.image}
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           placeholder="title"
//           name="title"
//           value={state.title}
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           placeholder="Ingredients"
//           name="ingredients"
//           value={state.ingredients.toString()}
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           placeholder="summary"
//           name="summary"
//           value={state.summary}
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="steps"
//           value={state.steps.join(".")}
//           required
//           onChange={handleChange}
//         />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Edit;


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipe, editRecipe } from "../../services/recipes.js";
import "./Edit.css"; // Import CSS file for styling

function Edit() {
  const [state, setState] = useState({
    image: "",
    title: "",
    cuisines: [],
    steps: [],
    ingredients: [],
    summary: "",
  });

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
    navigate(`/recipe/${id}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "ingredients" && name !== "steps") {
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      console.log(name)
    } else if (name === "ingredients") {
      setState((prevState) => ({
        ...prevState,
        [name]: value.split(","),
      }))
      console.log(state);
    } else {
      setState((prevState) => ({
        ...prevState,
        [name]: value.split("."),
      }));
      console.log(state)
    }
  };

  return (
    <div className="container">
      <div className="edit-container">
        <h1>Edit A Recipe!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="img"
            name="image"
            value={state.image}
            required
            onChange={handleChange}
            className="circular-input" // Apply circular input styling
          />

          <input
            type="text"
            placeholder="title"
            name="title"
            value={state.title}
            required
            onChange={handleChange}
            className="circular-input" // Apply circular input styling
          />

          <input
            type="text"
            placeholder="Ingredients"
            name="ingredients"
            value={state.ingredients.toString()}
            required
            onChange={handleChange}
            className="circular-input" // Apply circular input styling
          />

          <input
            type="text"
            placeholder="summary"
            name="summary"
            value={state.summary}
            required
            onChange={handleChange}
            className="circular-input" // Apply circular input styling
          />

          <input
            type="text"
            name="steps"
            value={state.steps.join(".")}
            required
            onChange={handleChange}
            className="circular-input" // Apply circular input styling
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
