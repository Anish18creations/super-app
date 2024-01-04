import React from 'react';
import "../Styles/Login2.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login2() {

  let [n,setn] = useState('');
  let [u,setu] = useState('');
  let [em,setem] = useState('');
  let [m,setm] = useState('');
  let [b,setb] = useState('');
  let navigate = useNavigate();

function validation(e){

  e.preventDefault();
  let t=true;

  let nam = document.getElementById('name').value ;
  let nam1 = nam.replace(/\s/g, '');
  var regex = /^[a-zA-Z]+$/;
  if (!regex.test(nam1)) {
  setn('Field is required');
  t=false;
  document.getElementById('name').style.borderColor = "#FF0000";
}
  else{
  document.getElementById('name').style.borderColor = "#292929";
  setn('');
}

  let user = document.getElementById('username').value ;
  let user1 = user.replace(/\s/g, '');
  var regex2 = /^[a-zA-Z0-9@._]+$/;
  if (!regex2.test(user1)) {
  setu('Field is required');
  t=false;
  document.getElementById('username').style.borderColor = "#FF0000";
}
  else{
  document.getElementById('username').style.borderColor = "#292929";
  setu('');
}

  let email = document.getElementById('emailaddress').value ;
  let email1 = email.replace(/\s/g, '');
  var regex3 = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!regex3.test(email1)) {
  setem('Field is required');
  t=false;
  document.getElementById('emailaddress').style.borderColor = "#FF0000";
}
  else{
  document.getElementById('emailaddress').style.borderColor = "#292929";
  setem('');
}

  let no = document.getElementById('phone').value ;
  let no1 = no.replace(/\s/g, '');
  var regex4 = /^[0-9]+$/;
  if (!regex4.test(no1) || no1.length!==10) {
  setm('Field is required');
  t=false;
  document.getElementById('phone').style.borderColor = "#FF0000";
}
  else{
  document.getElementById('phone').style.borderColor = "#292929";
  setm('');
}

  let box = document.getElementById('share');
  if(!box.checked){
  setb('Check this box if you want to proceed');
  t=false;
  }
  else{
  setb('');
}

  if(t===true){
    let obj = {
      name: nam,
      username: user,
      emailaddress: email,
      mobile: no
    }
    
    let stringifiedObj = JSON.stringify(obj)
    
    localStorage.setItem(
      "info",
      stringifiedObj
    )

    setn('');
    setb('');
    setem('');
    setm('');
    setu('');

    navigate('/genres');
  }
}

  return (
    <div>
         <div className='super-app'>Super app</div>
         <div className='new_acc'>Create your new account</div>
      <input type='text' id='name' className='name' placeholder='Name'></input>
      <div className='validatename'>{n}</div>
      <input type='text' id='username' className='username' placeholder='UserName'></input>
      <div className='validateuser'>{u}</div>
      <input type='text' id='emailaddress' className='emailaddress' placeholder='Email'></input>
      <div className='validateemail'>{em}</div>
      <input type="tel" id="phone" className="phone" placeholder='Mobile'></input>
      <div className='validatephone'>{m}</div>
      <input type="checkbox" id="share" className="share"></input>
      <div className='validatecheckbox'>{b}</div>
      <div className='text'>Share my registration data with Superapp</div>
      <div className='sign-up-btn' onClick={(e)=>{validation(e)}}></div>
      <div className='sign-up-text'>SIGN UP</div>
      <div className='tac'>
        <span className='click-signup'>By clicking on Sign up, you agree to Superapp </span>
        <span className='tac-of-use'>Terms and Conditions of Use</span>
      </div>
      <div className='policy'>
        <span className='learn'>To learn more about how Superapp collects, uses, shares and protects your
         personal data please head Superapp </span>
        <span className='privacy'>Privacy Policy</span>
      </div>
    </div>
  )
}

export default Login2;