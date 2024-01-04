import React from 'react'
import Showinfo from '../Pages/Showinfo';
import '../Styles/Main.css';
import Notes from '../Pages/Notes';
import News from '../Pages/News';
import Time from '../Pages/Time';
import Weather from '../Pages/Weather';
import Timer from './Timer';
import { useNavigate } from 'react-router-dom';

function Main() {

  let navigate = useNavigate();

  return (
    <div className='bgn' style={{backgroundColor:'black'}}>
      <div className='showinfo'>
        <Showinfo />
      </div>
      <div className='notes'>
        <Notes />
      </div>
      <div className='newsapi'>
        <News />
      </div>
      <div className='time'>
        <Time />
      </div>
      <div className='weather'>
        <Weather />
      </div>
      <div>
        <Timer />
      </div>
      <div className='browse' onClick={()=>{navigate('/movies')}}><p className='txt'>Browse</p></div>
    </div>
  )
}

export default Main;