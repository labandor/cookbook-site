import { useState, useEffect } from 'react';
import { getRecipe, deleteRecipe } from "../../services/recipes.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Details.css'

function Details() {

	const [recipe, setRecipe] = useState({})
	const [isLoaded, setLoaded] =useState(false);
	const { id } = useParams()
	let navigate = useNavigate()

	const fetchRecipe = async () => {
		const oneRecipe = await getRecipe(id);
		setRecipe(oneRecipe);
		setLoaded(true);
	}

	useEffect(() => {
		fetchRecipe()
	}, [id])

	const handleDelete = async (id) => {
		await deleteRecipe(id)
		fetchRecipe()
		console.log("deleted");
		navigate("/browse")
	}

	if (!isLoaded) {
		return <h1>Loading...</h1>
	}

	return (
		<div className='detail__container'>
			<div className="imgDiv">
				<img src={recipe.img} alt={recipe.title} />
    			</div>
      			<h2>{recipe.title}</h2>
      			<p id="ingredients">{recipe.steps.map((step)=> {
				let result = [];
				for(let i = 0; i < step.ingredients.length; i++) {
					if(!result.includes(step.ingredients[i])){
						result.push(step.ingredients[i]);
					}
				}
				return result;
			}).toString()
			}</p>
      			<p id="summary">{recipe.summary}</p>
      			<p id="instructions">{recipe.steps.map((step)=> {
				let result = [];
				result.push(step.step);
				return result;
			}).toString()
			}</p>
			<div>
        			<Link to={`/recipe/${id}/edit`}>
         			 <button>EDIT</button>
        			</Link>
        			<button onClick={() => handleDelete(recipe._id)}>DELETE</button>
      			</div>
    		</div>
  	)
}

export default Details
