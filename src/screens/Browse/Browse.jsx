// import Recipe from "../../components/Recipe/Recipe.jsx";
// import "./Browse.css";
// import { getRecipes } from "../../services/recipes.js";
// import { useState, useEffect } from "react";
// import Search from "../../components/Search/Search.jsx";

// function Browse() {
//   const [recipes, setRecipes] = useState([]);
//   const [searchResult, setSearchResult] = useState([]);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       const allRecipes = await getRecipes();
//       setRecipes(allRecipes);
//       setSearchResult(allRecipes);
//     };
//     fetchRecipe();
//   }, []);

//   const handleSearch = (event) => {
//     const results = recipes.filter((recipe) => {
//       return (
//         recipe.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
//         recipe.cuisine.toLowerCase().includes(event.target.value.toLowerCase())
//       );
//     });

//     setSearchResult(results);
//   };

//   const handleSubmit = (event) => event.preventDefault();

//   return (
//     <div className="recipes">
//       <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
//       {searchResult.map((recipe, index) => {
//         return (
//           <Recipe
//             className="recipe"
//             _id={recipe._id}
//             key={index}
//             title={recipe.title}
//             image={recipe.image}
//             summary={recipe.summary}
//             steps={recipe.steps}
//             cuisine={recipe.cuisine}
//             sourceURL={recipe.sourceURL}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default Browse;


import Recipe from "../../components/Recipe/Recipe.jsx";
import "./Browse.css";
import { getRecipes } from "../../services/recipes.js";
import { useState, useEffect } from "react";
import Search from "../../components/Search/Search.jsx";

function Browse() {
  const [recipes, setRecipes] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      const allRecipes = await getRecipes();
      setRecipes(allRecipes);
      setSearchResult(allRecipes);
    };
    fetchRecipe();
  }, []);

  const handleSearch = (event) => {
    const results = recipes.filter((recipe) => {
      return (
        recipe.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        recipe.cuisine.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });

    setSearchResult(results);
  };

  const handleSubmit = (event) => event.preventDefault();

  return (
    <div className="browse-container">
      <header>
        {/* Your navigation bar */} 
      </header>
      <div className="search-container">
        <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      </div>
      <div className="recipes">
        {searchResult.map((recipe, index) => {
          return (
            <Recipe
              className="recipe"
              _id={recipe._id}
              key={index}
              title={recipe.title}
              image={recipe.image}
              summary={recipe.summary}
              steps={recipe.steps}
              cuisine={recipe.cuisine}
              sourceURL={recipe.sourceURL}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Browse;
