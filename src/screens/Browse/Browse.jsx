import Recipe from '../../components/Recipe/Recipe.jsx';
import './Browse.css';
import { getRecipes } from '../../services/recipes.js';
import { useState, useReact } from 'react';
import { Search, Recipes } from '../../components';

function Browse() {
	const [recipes, setRecipes] = useState([]);
  	const [searchResult, setSearchResult] = useState([]);

  	useEffect(() => {
  		const fetchProducts = async () => {
      			const allProducts = await getProducts()
      			setProducts(allProducts)
      			setSearchResult(allProducts)
    		}
    			fetchProducts()
  	}, []);

	const handleSearch = (event) => {
		const results = products.filter((product) =>
	     		product.name.toLowerCase().includes(event.target.value.toLowerCase())
    		)
    		setSearchResult(results)
    		setApplySort(true)
  	}

	return(
		<Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      		<Sort onSubmit={handleSubmit} handleSort={handleSort} />
      		<div className='recipes'>
        	{searchResult.map((recipe, index) => {
          		return (
            			<Product
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
