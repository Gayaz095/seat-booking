import React from 'react'
import { AmountContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import './Booking.css'
import StartAgain from '../StartAgain';

export default function Booking() {
  const [flag, setFlag] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const navigate = useNavigate();
  function handleSeating() {
    navigate('/');
  };

  React.useEffect(()=>{
    setTimeout(() => {
      setDisable(true)
      setFlag(!flag)
      }, 10000);
    },
  []);

  return (
    <div className='container'>
      <div className='rowBooking'>
        <button style={{padding:"10px", fontSize:"20px"}} disabled={disable} onClick={handleSeating}>
        Back to Booking Page
        </button>
        <p style={{backgroundColor: 'brown', color: 'white'}}>You have limited time for booking the seats.</p>
        <Timer />
        <StartAgain />
        {flag && 
        <div className="go-back">
        <p style={{fontSize:"20px"}}> Cannot update booking now.</p>       
        </div>}
      </div>
    </div>
  )
};
