import { useState, useEffect } from 'react';
import { getRecipe, deleteRecipe } from "../../services/recipes.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import './Details.css'


// what is the route for this



function Details() {

	const [recipe, setRecipe] = useState({})
	const [isLoaded, setLoaded] =useState(false);

	let { id } = useParams()
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
      			<p id="ingredients">{recipe.ingredients}</p>
      			<p id="summary">{recipe.summary}</p>
      			<p id="instructions">{recipe.instructions}</p>
			<div>
        			<Link to={`/recipe/${id}/edit`}>
         			 <button>EDIT</button>
        			</Link>
        			<button onClick={handleDelete(recipe._id)}>DELETE</button>
      			</div>
    		</div>
  	)
}

// i got this i know how to do this page

export default Details
