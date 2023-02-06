import React, { useContext, useState } from "react";
import { AmountContext } from "../context/Context";
import './SeatMatrix.css';

function SeatMatrix() {
	const count = localStorage.getItem('selectedSeats') ? JSON.parse(localStorage.getItem('selectedSeats')).length : 0;
	const [SelectedSeatsCount, setSelectedSeatsCount] = useState(count);
	const { price } = useContext(AmountContext);

	const populateSeats = () => {
		const allSeats = document.querySelectorAll('.row .seat');
		const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
		if (selectedSeats !== null && selectedSeats.length > 0) {
			allSeats.forEach((seat, index) => {
				if (selectedSeats.indexOf(index) > -1) {
					seat.classList.add('selected');
				}
			})
		}
	};
	populateSeats();
	const saveSeatIndex = (allSeats, seats) => {
		const seatsIndex = [...seats].map((seat) => [...allSeats].indexOf(seat));
		localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
	};
	const updateSelectedSeats = (e) => {
		const allSeats = document.querySelectorAll('.row .seat');
		const selectedSeats = document.querySelectorAll('.row .seat.selected');
		setSelectedSeatsCount(selectedSeats.length);
		saveSeatIndex(allSeats, selectedSeats);
	};
	const handleClick = (e) => {
		if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
			e.target.classList.toggle('selected')
		}
		updateSelectedSeats(e);
	};

  return (
		<div className="seatArrangement">
			<div className='seatMatrix' onClick={handleClick}>
				<div className='row'>
					<div className='seat'></div>
					<div className='seat'></div>
					<div className='seat'></div>
					<div className='seat'></div>
				</div>
				<div className='row'>
					<div className='seat'></div>
					<div className='seat'></div>
					<div className='seat'></div>
					<div className='seat'></div>
				</div>
					<div className='row'>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
						<div className='seat'></div>
					</div>
			</div>
					<p className="text" style={{textAlign: "center", margin: "5px"}}>You have selected : <span id="count" style={{color: "black"}}>{SelectedSeatsCount}</span> seats.
					<br />
			  		<span id="total">Total price:{SelectedSeatsCount * price}</span></p>
		  	<div>
			<ul className='footer'>
				<li>
					<div className='footer-li'>
						<div className='seat'></div>
						<small>Available</small>
					</div>
				</li>
				<li>
					<div className='footer-li'> 
						<div className='seat selected'></div>
						<small>Selected</small>
					</div>
				</li>
			</ul>
			</div>		
		</div>
	);
};

export default SeatMatrix;
