import Recipe from '../../components/Recipe/Recipe.jsx';
import './Browse.css';
import { getRecipes } from '../../services/recipes.js';
import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search.jsx';

function Browse() {
	const [recipes, setRecipes] = useState([]);
  	const [searchResult, setSearchResult] = useState([]);

  	useEffect(() => {
  		const fetchRecipe = async () => {
      			const allRecipes = await getRecipes()
      			setRecipes(allRecipes)
      			setSearchResult(allRecipes)
    		}
    			fetchRecipe()
  	}, []);

	const handleSearch = (event) => {
		const results = recipes.filter((recipe) =>
	     		recipe.title.toLowerCase().includes(event.target.value.toLowerCase())
    		)
    		setSearchResult(results)
  	}

 	const handleSubmit = (event) => event.preventDefault()

	return(
      		<div className='recipes'>
			<Search onSubmit={handleSubmit} handleSearch={handleSearch} />
        		{searchResult.map((recipe, index) => {
          			return (
            				<Recipe
              					_id={recipe._id}
						key={index}
              					title={recipe.title}
              					image={recipe.image}
						summary={recipe.summary}
						steps={recipe.steps}
						cuisines={recipe.cuisines}
						sourceURL = {recipe.sourceURL}
            				/>
          			)
        		})}
      		</div>
	);
}

export default Browse;
