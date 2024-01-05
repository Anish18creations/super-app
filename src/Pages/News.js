import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Styles/News.css';

function News() {

  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    
      async function getNewsData() {
        const resp = await axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=b26dfe9bbc1c4ab393c586c1480f9888&pageSize=1");
        setNewsData(resp.data.articles);
      }

      getNewsData();

  },[]);

  let date = new Date();

  let day = date.getDate();
  if(day < 10)
  day = "0" + day;
  let month = date.getMonth() + 1;
  if(month < 10)
  month = "0" + month;
  let year = date.getFullYear();
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
      {newsData.map((newsData , idx) =>
        <div key={idx}>
          <img src={newsData.urlToImage} width={363} height={325} className='news' alt='' />*
          <div className='layout'></div>
          <div className='title'>{newsData.title}</div>
          <div className='desc'><p className='desc-text'>{newsData.description}</p></div>
          <div className='showdate' id='currentdate'>{currentDate}</div>
          <div className='dash'>|</div>
          <div className='showdate' id='currenttime' style={{ left: '134.92px' }}>{start}{add}&nbsp;{end}</div>
        </div>
      )}
    </div>
  );
}

export default News;