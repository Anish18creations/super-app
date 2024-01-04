import React from 'react';
import Generalised from '../Assets/Generalised.png';
import '../Styles/showinfo.css';

function Showinfo() {

let info = localStorage.getItem('info');
  
let userinfo = JSON.parse(info);
let n = userinfo.name;
let email2 = userinfo.emailaddress;
let userr = userinfo.username;

let genre = localStorage.getItem('genres');
  
let genreinfo = JSON.parse(genre);

return (
    <div>
        <img src={Generalised} alt='' className='general'></img>
        <div className='display-name'>{n}</div>
        <div className='display-email'>{email2}</div>
        <div className='display-user'>{userr}</div>
        <div className='scroll-detail'>
          {genreinfo.map((element , idx) => <div className='display' key={idx}><p>{element}</p></div>)}
        </div>
    </div>
  )
}

export default Showinfo;