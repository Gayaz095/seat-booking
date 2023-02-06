import React, { useContext, useState, useEffect } from "react";
import { AmountContext } from "../context/Context";
import './Seat.css';

function Seat() {
	const { updatePrice } = useContext(AmountContext);
	const [price, setPrice] = useState(
		JSON.parse(localStorage.getItem('selectedMoviePrice') || 50)
	);
	const handleChange = (e) => {
		/* e.preventDefault(); */
		setPrice(Number(e.target.value));
	};
	useEffect(() => {
		updatePrice(price);
	}, []);

	return (
		<div className='movies'>
			<option style={{fontSize: "50px"}}>Pick a movie: </option>
			<select style={{fontSize: "30px"}} value={`${price}`} onChange={handleChange} id='movie'>
				<option value='50'>Movie price : 50</option>
			</select>
		</div>
	);
};

export default Seat;