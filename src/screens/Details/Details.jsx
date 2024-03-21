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
/*
	const ingredients = () => {
		let temp = recipe.steps.map((step)=> {
			let result = [];
			for(let i = 0; i < step.ingredients.length; i++) {
				if(!result.includes(step.ingredients[i])){
					result.push(step.ingredients[i]);
				}
			}
			return result;
		});

		return (
			<ul>{temp.map((temp1) => {
					return <li>{temp1}</li>
				}
			}
			</ul>
		);
	}
*/
	return (
		<div className='detail__container'>
			<div className="imgDiv">
				<img src={recipe.image} alt={recipe.title} />
    			</div>
      			<h2>{recipe.title}</h2>
      			<ul id="ingredients">{recipe.ingredients.map((ingredient) => {
				return <li>{ingredient}</li>
			})}</ul>
      			<p id="summary">{recipe.summary}</p>
      			<ul id="instructions">{recipe.steps.map((step)=> {
				return <li>{step}</li>
			})}</ul>
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
