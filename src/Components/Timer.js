import Uparrow from '../Assets/Uparrow.png';
import Downarrow from '../Assets/Downarrow.png';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import send from '../Assets/send.mp3'
//add audio for timer completion

import { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [audio,setaudio] = useState('Start');
  const increaseSecond = () => {
    if (seconds == 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes == 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds == 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes == 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours == 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    /*if(seconds === 0 && hours === 0 && minutes === 0)
    new Audio(send).play();*/

    return `${hours}:${minutes}:${seconds}`;
  }

  const statechange = () =>{
    if(audio == 'Start')
    {
      setaudio('Stop');
      setPlaying((prev) => !prev); 
    }
    else{
      setaudio('Start');
      setPlaying((prev) => !prev);
      new Audio(send).play();
    }
  }

  const playaudio = () =>{
     new Audio(send).play();
     setaudio('Start');
  }

  return (
    <div
      style={{
        position : "absolute",
        left : '4.3vw',
        top : '64vh',
        width: "53.7vw",
        height: "32.2vh",
        background: "#1E2343",
        borderRadius: "12px",
        marginTop: "6px"
      }}
    >
      <div>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={seconds + minutes * 60 + hours * 60 * 60}
          colors={["#FF6A6A"]}
          onComplete={()=>playaudio()}
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "1.5rem" }}>
              {toHoursAndMinutes(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div style={{ width: "35vw", textAlign: "center" }}>
        <div
          style={{
            color: "white",
            fontSize: "2rem"
          }}
        >
          <div style={{ position:'absolute' , top:'1vh' , left:'23vw' }}>
            <p>Hours</p>
            <img
              style={{ width: "20px", height: "20px" , position:'absolute' , top:'9vh' , left:'2.5vw' }}
              onClick={increaseHour}
              src={Uparrow} alt=''
            />
            {hours}
            <img
              style={{ width: "20px", height: "20px" , position:'absolute' , top:'22vh' , left:'2.5vw'}}
              onClick={decreaseHour}
              src={Downarrow} alt=''
            />
          </div>
          <div style={{  position:'absolute' , top:'1vh' , left:'32vw' }}>
            <p>Minutes</p>
            <img
              style={{ width: "20px", height: "20px" , position:'absolute' , top:'9vh' , left:'3.5vw' }}
              onClick={increaseMinute}
              src={Uparrow} alt=''
            />
            {minutes}
            <img
              style={{ width: "20px", height: "20px" , position:'absolute' , top:'22vh' , left:'3.7vw'}}
              onClick={decreaseMinute}
              src={Downarrow} alt=''
            />
          </div>
          <div style={{  position:'absolute' , top:'1vh' , left:'43vw' }}>
            <p>Seconds</p>
            <img
              style={{ width: "20px", height: "20px" , position:'absolute' , top:'9vh' , left:'3.5vw'}}
              onClick={increaseSecond}
              src={Uparrow} alt=''
            />
            {seconds}
            <img
              style={{ width: "20px", height: "20px" , position:'absolute' , top:'22vh' , left:'3.6vw'}}
              onClick={decreaseSecond}
              src={Downarrow} alt=''
            />
          </div>
        </div><br/><br/>
        {/*<audio muted={true}><source src={send}></source></audio>*/}
        <div
          onClick={() => statechange()}
          style={{
            background: "#FF6A6A",
            borderRadius: "12px",
            padding: "3px",
            color: "white",
            textAlign: "center",
            width: "15vw",
            height: '3vh',
            position: 'absolute',
            bottom: '1vh',
            right: '9vw'
          }}
        >
          
        </div>
        {playing ? <div style={{position:'absolute' , bottom:'1vh' , right:'16vw' , color:'white' , fontSize:'1.2rem'
        , cursor:'default'}} onClick={() => statechange()}>
          {audio}
          </div> 
          : 
        <div style={{position:'absolute' , bottom:'1vh' , right:'16vw' , color:'white' , fontSize:'1.2rem' ,
        cursor:'default'}} onClick={() => statechange()}>{audio}</div>}
      </div>
    </div>
  );
};
export default Timer;