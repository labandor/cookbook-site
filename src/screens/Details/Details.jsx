import { useState, useEffect } from 'react';
import { getRecipe, deleteRecipe } from "../services/codingjobs.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../styles/Detail.css'


// what is the route for this



function Details() {

	const [recipe, setRecipe] = useState({})
	const [isloaded, setLoaded] =useState({});

	let { id } = useParams()
	let navigate = useNavigate()

	const fetchRecipe = async () => {
		const oneRecipe = await getRecipe(id)
		setRecipe(oneRecipe)
	}

	useEffect(() => {
		fetchRecipe()
	}, [])

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
				<img src={recipe.img} alt=recipe.title />
    			</div>
      			<h2>{state.title}</p>
      			<p id="ingredients">{state.ingredients}</p>
      			<p id="summary">{state.summary}</p>
      			<p id="instructions">{state.instructions}</p>
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
