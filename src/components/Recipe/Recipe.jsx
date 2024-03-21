import './Recipe.css';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
    return (
       	<>
            <Link className="recipe" to={`/recipe/${props._id}`}>
                <img className="recipe-image" src={props.image} alt={props.title} />
                <div className="recipe-name">{props.title}</div>
	    	<div className="cuisine">{props.cuisine}</div>
            </Link>
        </>
    )
}
export default Recipe;

