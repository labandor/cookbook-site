import react from 'react';
import './About.css';

function About() {
	return(
		<div className='about-container'>
			<h1>About Us</h1>
			<div id="Booker">
				<h2>Booker Ngoon</h2>
				<p style={{ marginBottom: '20px' }}> 
Chef Hiroshi Tanaka, with over two decades of culinary expertise, is a master of Asian gastronomy. Trained in Kyoto and Tokyo, he blends traditional flavors with innovative techniques. His dedication to perfection has earned him an impressive five Michelin stars. Each dish he crafts tells a sensory story, captivating diners worldwide. Experience the magic of Chef Tanaka's unparalleled cuisine. </p>
			</div>
			<div id="Aleksandre">
				<h2>Aleksandre Chkhikvishvili</h2>
				<p style={{ marginBottom: '20px' }}> 
Chef Nikoloz Gogoladze, trained in the heart of Georgia's culinary traditions, is a maestro of authentic Georgian cuisine. With a passion for blending traditional flavors and innovative techniques, he has garnered acclaim both locally and internationally. His culinary prowess has earned him five Michelin stars, showcasing the richness and diversity of Georgian gastronomy. Every dish he creates is a sensory journey, offering diners a taste of Georgia's vibrant culinary heritage. Indulge in the unforgettable flavors of Chef Gogoladze's Michelin-starred cuisine. </p>
			</div>
			<div id="Luke">
				<h2>Luke Bandeen</h2>
				<p> 
				Eleanor Sterling, a product of London's dynamic culinary landscape, is a passionate advocate for cross-cultural cuisine. Inspired by the city's diverse flavors and traditions, Eleanor has become a trailblazer in blending classic British dishes with international nuances. His culinary innovations have not only earned him five Michelin stars but also established him as a leading figure in redefining London's gastronomic identity. With each dish Eleanor meticulously crafts, he offers a unique and unforgettable dining experience, celebrating the fusion of global flavors with local charm. Dive into the culinary world of Chef Sterling and discover the magic of his Michelin-starred creations.
				</p>
			</div>
		</div>
	);
}

export default About;
