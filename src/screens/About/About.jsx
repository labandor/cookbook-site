import react from 'react';
import './About.css';

function About() {
	return(
		<div className='about-container'>
			<h1>About Us</h1>
			<div id="Booker">
				<h2>Booker Ngoon</h2>
				<p> 5 Michelin stars </p>
			</div>
			<div id="Aleksandre">
				<h2>Aleksandre Chkhikvishvili</h2>
				<p> input here </p>
			</div>
			<div id="Luke">
				<h2>Luke Bandeen</h2>
				<p> Luke is an Software Engineer hailing from London, England. Often finds himself looking for recipes to make something new. He is also in awe of the number of Bookers Michelin stars.</p>
			</div>
		</div>
	);
}

export default About;
