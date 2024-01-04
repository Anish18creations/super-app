import React , { useState , useEffect } from 'react';
import styles from '../Styles/Time.module.css';

function Time() {

    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if(day < 10)
    day = "0" + day;
    if(month < 10)
    month = "0" + month;
    let currentDate = `${month}-${day}-${year}`;

    let hour = date.getHours();
    let end, start;
    if (hour >= 12) {
      end = 'PM';
    }
    else {
      end = 'AM';
    }

  let add;
  let [time, settime] = useState(new Date())
  if (hour === 10 || hour === 11 || hour === 12 || hour===22 || hour===23 || hour===24 || hour===0){
    start = "";
    add = time.toLocaleTimeString().slice(0, 5);
  }
  else{
    start = "0";
    add = time.toLocaleTimeString().slice(0, 4);
  }
  

    useEffect(() => {
      setInterval(() => settime(new Date()), 1000)
    }, [])
  

  return (
    <div>
        <div className={styles.date}>{currentDate}</div>
        <div className={styles.time}>{start}{add}&nbsp;{end}</div>
    </div>
  )
}

export default Time;