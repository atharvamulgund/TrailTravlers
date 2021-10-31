import React from 'react';
import './Tours.css';
import { cakes } from '../data/Tours';
import Slide from 'react-reveal/Reveal';

const Cakes = ({ id }) => {
	return (
		<div className="cakeContainer" id={id}>
			<h1 className="cakeHeading">Prepare to be Boarded?</h1>
			<div className="cakeWrapper">
				{cakes.map((cake, index) => (
					<Slide
						key={index}
						right={index >= 3 ? true : false}
						left={index < 3 ? true : false}
					>
						<div className="cakeCard">
							<img src={cake.img} className="cakeImg" alt={cake.alt} />
							<div className="cakeInfo">
								<div className="protTitle">{cake.title}</div>
								<div className="protDesc">{cake.desc}</div>
								<div className="cakePrice">{cake.price}</div>
							
							</div>
						</div>
					</Slide>
				))}
			</div>
		</div>
	);
};

export default Cakes;
