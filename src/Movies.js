import React from 'react';
import Seat from './components/Seat.js'
import SeatMatrix from './components/SeatMatrix.js'
function Movies() {
  return (
    <div className='app-container'>
      <Seat />
      <SeatMatrix />
    </div>
  );
};

export default Movies;
