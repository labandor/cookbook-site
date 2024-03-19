import './Recipe.css';
import { Link } from 'react-router-dom';

const Recipe = (rec) => {
    return (
       	<>
            <Link className="recipe" to={`/recipe/${rec._id}`}>
                <img className="recipe-image" src={rec.imgURL} alt={rec.name} />
                <div className="recipe-name">{rec.name}</div>
            </Link>
        </>
    )
}
export default Recipe;

