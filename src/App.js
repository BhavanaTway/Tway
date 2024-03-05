// 6.flip card 
import React, { useState } from "react";
import "./App.css";
const App = () => {
	const cardFront = "Flip Card Front.";
	const cardBack = "Flip Card Back.";
	const [isFlipped, setFlipped] = useState(false);

	const handleFlip = () => {
		setFlipped(!isFlipped);
	};

	return (
		<div className="App">
			<div className="container">
				<div
					className={`flip-card ${
						isFlipped ? "flipped" : ""
					}`}
				>
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<div className="card-content">
								{cardFront}
							</div>
							<button
								className="flip-button"
								onClick={handleFlip}
							>
							</button>
						</div>
						<div className="flip-card-back">
							<div className="card-content">
								{cardBack}
							</div>
							<button
								className="flip-button"
								onClick={handleFlip}
							>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;


























