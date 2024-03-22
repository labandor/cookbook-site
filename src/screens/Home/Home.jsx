import './Home.css'
import Recipe from '../../components/Recipe/Recipe.jsx';

const Home = (props) => {
  return (
      <div className='home'>
        {/* <img className='image' src="https://images.unsplash.com/photo-1483137140003-ae073b395549?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
        <Recipe />
	<h1>Chefs Kiss</h1>

	<p className='landing-text'>We set out to create a site to be a hub of recipes that can be shared accross cultures to connect people and satisfy our tastebuds</p>
      </div>
  )
}

export default Home
