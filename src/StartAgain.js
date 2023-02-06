import React from "react"
import { useNavigate } from 'react-router-dom';

function StartAgain() {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/')
		window.localStorage.clear();
	};

	return (
		<div>
			<button  style={{padding:"10px"}} onClick={handleClick}>
				Clear Booking and start Again
			</button>
		</div>
	)
};

export default StartAgain;
