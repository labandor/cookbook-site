import Recipe from '../../components/Recipe/Recipe.jsx';
import './Browse.css';
import { getRecipes } from '../../services/recipes.js';
import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search.jsx';
import Recipes from '../../components/Recipe/Recipe.jsx';

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
	     		recipe.name.toLowerCase().includes(event.target.value.toLowerCase())
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
              				title={recipe.title}
              				img={recipe.img}
              				key={index}
					summary={recipe.summary}
					ingredients={recipe.ingredients}
					instructions={recipe.instructions}
            			/>
          		)
        	})}
      		</div>
	);
}

export default Browse;
