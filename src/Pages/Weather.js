import React, { useState } from 'react';
import styles from '../Styles/Weather.module.css';
import Humidity from '../Assets/Humidity.png';
import Wind from '../Assets/Wind.png';
import Pressure from '../Assets/Pressure.png';
import Humidity2 from '../Assets/Humidity2.png';
import { useEffect } from 'react';
import axios from 'axios';

function Weather() {

    let [temp, settemp] = useState([]);
    let [pressure, setpressure] = useState([]);
    let [wind, setwind] = useState([]);
    let [humidity, sethumidity] = useState([]);
    let [icon, seticon] = useState([]);
    let [forecast, setforecast] = useState([]);

    useEffect(() => {
        
        async function fetchWeatherDetails() {
            const response = await axios.get("http://api.weatherapi.com/v1/current.json?key=e6f6b5c2ecc4463db8f94656230612&q=Kalyani&aqi=no");
            settemp(response.data.current.temp_c);
            setpressure(response.data.current.pressure_mb);
            setwind(Math.floor(response.data.current.wind_kph));
            seticon(response.data.current.condition.icon);
            sethumidity(response.data.current.humidity);
            setforecast(response.data.current.condition.text);
        }

        fetchWeatherDetails();
    
    }, []);

    return (
        <div>
            <img className={styles.icon} src={icon} alt='' ></img>
            <div className={styles.cast}>{forecast}</div>
            <div className={styles.line} />
            <div className={styles.line} style={{ left: '266.81px' }} />
            <div className={styles.temp}>{temp}&deg;C</div>
            <div className={styles.pressureline1}>{pressure}&nbsp;mbar</div>
            <div className={styles.pressureline2}>Pressure</div>
            <img src={Pressure} alt='' className={styles.pressure}></img>
            <div className={styles.windline1}>{wind}&nbsp;km/h</div>
            <div className={styles.windline2}>Wind</div>
            <img src={Wind} alt='' className={styles.wind}></img>
            <div className={styles.humidityline1}>{humidity}%</div>
            <div className={styles.humidityline2}>Humidity</div>
            <img src={Humidity} alt='' className={styles.humidity}></img>
            <img src={Humidity2} alt='' className={styles.humidity2}></img>
        </div>
    )
}

export default Weather;