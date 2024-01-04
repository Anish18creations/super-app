import React, { useState } from 'react';
import '../Styles/Genres.css';
import Action2 from '../Assets/Action2.png';
import Drama2 from '../Assets/Drama2.png';
import Romance from '../Assets/Romance.png';
import Thriller from '../Assets/Thriller.png';
import Western from '../Assets/Western.png';
import Horror from '../Assets/Horror.png';
import Fantasy from '../Assets/Fantasy.png';
import Music from '../Assets/Music.png';
import Fiction from '../Assets/Fiction.png';
import Warning from '../Assets/Warning.png';
import { useNavigate } from 'react-router-dom';


function Genres() {

  let [b_action, setb_action] = useState(true);
  let [b_drama, setb_drama] = useState(true);
  let [b_romance, setb_romance] = useState(true);
  let [b_thriller, setb_thriller] = useState(true);
  let [b_western, setb_western] = useState(true);
  let [b_horror, setb_horror] = useState(true);
  let [b_fantasy, setb_fantasy] = useState(true);
  let [b_music, setb_music] = useState(true);
  let [b_fiction, setb_fiction] = useState(true);
  let [count, setcount] = useState(0);
  let [a,seta] = useState(false);
  let [b,setb] = useState(false);
  let [c,setc] = useState(false);
  let [d,setd] = useState(false);
  let [e1,sete1] = useState(false);
  let [f,setf] = useState(false);
  let [g,setg] = useState(false);
  let [h,seth] = useState(false);
  let [i,seti] = useState(false);
  let navigate = useNavigate();

  function border_action(e) {
    e.preventDefault();
    if (b_action) {
      document.getElementById('one').style.borderColor = '#11B800';
      setb_action(false);
      document.getElementById('t1').style.display = 'flex';
      document.getElementById('t1c').style.display = 'flex';
      document.getElementById('t1t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      seta(true);
    }
    else {
      document.getElementById('one').style.borderColor = '#FF5209';
      setb_action(true);
      document.getElementById('t1').style.display = 'none';
      document.getElementById('t1c').style.display = 'none';
      document.getElementById('t1t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      seta(false);
    }
  }

  function border_drama(e) {
    e.preventDefault();
    if (b_drama) {
      document.getElementById('two').style.borderColor = '#11B800';
      setb_drama(false);
      document.getElementById('t2').style.display = 'flex';
      document.getElementById('t2c').style.display = 'flex';
      document.getElementById('t2t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setb(true);
    }
    else {
      document.getElementById('two').style.borderColor = '#D7A4FF';
      setb_drama(true);
      document.getElementById('t2').style.display = 'none';
      document.getElementById('t2c').style.display = 'none';
      document.getElementById('t2t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setb(false);
    }
  }

  function border_romance(e) {
    e.preventDefault();
    if (b_romance) {
      document.getElementById('three').style.borderColor = '#11B800';
      setb_romance(false);
      document.getElementById('t3').style.display = 'flex';
      document.getElementById('t3c').style.display = 'flex';
      document.getElementById('t3t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setc(true);
    }
    else {
      document.getElementById('three').style.borderColor = '#148A08';
      setb_romance(true);
      document.getElementById('t3').style.display = 'none';
      document.getElementById('t3c').style.display = 'none';
      document.getElementById('t3t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setc(false);
    }
  }

  function border_thriller(e) {
    e.preventDefault();
    if (b_thriller) {
      document.getElementById('four').style.borderColor = '#11B800';
      setb_thriller(false);
      document.getElementById('t4').style.display = 'flex';
      document.getElementById('t4c').style.display = 'flex';
      document.getElementById('t4t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setd(true);
    }
    else {
      document.getElementById('four').style.borderColor = '#84C2FF';
      setb_thriller(true);
      document.getElementById('t4').style.display = 'none';
      document.getElementById('t4c').style.display = 'none';
      document.getElementById('t4t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setd(false);
    }
  }

  function border_western(e) {
    e.preventDefault();
    if (b_western) {
      document.getElementById('five').style.borderColor = '#11B800';
      setb_western(false);
      document.getElementById('t5').style.display = 'flex';
      document.getElementById('t5c').style.display = 'flex';
      document.getElementById('t5t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      sete1(true);
    }
    else {
      document.getElementById('five').style.borderColor = '#902500';
      setb_western(true);
      document.getElementById('t5').style.display = 'none';
      document.getElementById('t5c').style.display = 'none';
      document.getElementById('t5t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      sete1(false);
    }
  }

  function border_horror(e) {
    e.preventDefault();
    if (b_horror) {
      document.getElementById('six').style.borderColor = '#11B800';
      setb_horror(false);
      document.getElementById('t6').style.display = 'flex';
      document.getElementById('t6c').style.display = 'flex';
      document.getElementById('t6t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setf(true);
    }
    else {
      document.getElementById('six').style.borderColor = '#7358FF';
      setb_horror(true);
      document.getElementById('t6').style.display = 'none';
      document.getElementById('t6c').style.display = 'none';
      document.getElementById('t6t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setf(false);
    }
  }

  function border_fantasy(e) {
    e.preventDefault();
    if (b_fantasy) {
      document.getElementById('seven').style.borderColor = '#11B800';
      setb_fantasy(false);
      document.getElementById('t7').style.display = 'flex';
      document.getElementById('t7c').style.display = 'flex';
      document.getElementById('t7t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setg(true);
    }
    else {
      document.getElementById('seven').style.borderColor = '#FF4ADE';
      setb_fantasy(true);
      document.getElementById('t7').style.display = 'none';
      document.getElementById('t7c').style.display = 'none';
      document.getElementById('t7t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      setg(false);
    }
  }

  function border_music(e) {
    e.preventDefault();
    if (b_music) {
      document.getElementById('eight').style.borderColor = '#11B800';
      setb_music(false);
      document.getElementById('t8').style.display = 'flex';
      document.getElementById('t8c').style.display = 'flex';
      document.getElementById('t8t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      seth(true);
    }
    else {
      document.getElementById('eight').style.borderColor = '#E61E32';
      setb_music(true);
      document.getElementById('t8').style.display = 'none';
      document.getElementById('t8c').style.display = 'none';
      document.getElementById('t8t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      seth(false);
    }
  }

  function border_fiction(e) {
    e.preventDefault();
    if (b_fiction) {
      document.getElementById('nine').style.borderColor = '#11B800';
      setb_fiction(false);
      document.getElementById('t9').style.display = 'flex';
      document.getElementById('t9c').style.display = 'flex';
      document.getElementById('t9t').style.display = 'flex';
      setcount(++count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      seti(true);
    }
    else {
      document.getElementById('nine').style.borderColor = '#6CD061';
      setb_fiction(true);
      document.getElementById('t9').style.display = 'none';
      document.getElementById('t9c').style.display = 'none';
      document.getElementById('t9t').style.display = 'none';
      setcount(--count);
      document.getElementById('ws').style.display = 'none';
      document.getElementById('wst').style.display = 'none';
      seti(false);
    }
  }

  function validation(e) {
    e.preventDefault();
   if(count<3){
    document.getElementById('ws').style.display = 'flex';
    document.getElementById('wst').style.display = 'flex';
   }
   else{
    let arr=[];
    if(a)
    arr.push('Action');
    if(b)
    arr.push('Drama');
    if(c)
    arr.push('Romance');
    if(d)
    arr.push('Thriller');
    if(e1)
    arr.push('Western');
    if(f)
    arr.push('Horror');
    if(g)
    arr.push('Fantasy');
    if(h)
    arr.push('Music');
    if(i)
    arr.push('Fiction');
    console.log(arr);
    
    let genres = JSON.stringify(arr);
    
     localStorage.setItem("genres", genres);
     navigate('/main');
    }
  }

  return (
    <div className='bg'>
      <div className='titl'>Super app</div>
      <div className='entertainment'>Choose your entertainment category</div>
      <div className='action' id='one'></div>
      <div className='action-text'>Action</div>
      <img className='action-img' src={Action2} alt='' onClick={(e) => { border_action(e) }}></img>
      <div className='drama' id='two'></div>
      <div className='drama-text'>Drama</div>
      <img className='drama-img' src={Drama2} alt='' onClick={(e) => { border_drama(e) }}></img>
      <div className='romance' id='three'></div>
      <div className='romance-text'>Romance</div>
      <img className='romance-img' src={Romance} alt='' onClick={(e) => { border_romance(e) }}></img>
      <div className='thriller' id='four'></div>
      <div className='thriller-text'>Thriller</div>
      <img className='thriller-img' src={Thriller} alt='' onClick={(e) => { border_thriller(e) }}></img>
      <div className='western' id='five'></div>
      <div className='western-text'>Western</div>
      <img className='western-img' src={Western} alt='' onClick={(e) => { border_western(e) }}></img>
      <div className='horror' id='six'></div>
      <div className='horror-text'>Horror</div>
      <img className='horror-img' src={Horror} alt='' onClick={(e) => { border_horror(e) }}></img>
      <div className='fantasy' id='seven'></div>
      <div className='fantasy-text'>Fantasy</div>
      <img className='fantasy-img' src={Fantasy} alt='' onClick={(e) => { border_fantasy(e) }}></img>
      <div className='music' id='eight'></div>
      <div className='music-text'>Music</div>
      <img className='music-img' src={Music} alt='' onClick={(e) => { border_music(e) }}></img>
      <div className='fiction' id='nine'></div>
      <div className='fiction-text'>Fiction</div>
      <img className='fiction-img' src={Fiction} alt='' onClick={(e) => { border_fiction(e) }}></img>
      <div className='next-page-btn' onClick={(e)=> {validation(e)}}></div>
      <div className='next-page-text' onClick={(e)=> {validation(e)}}>Next Page</div>
      <div className='tab1' id='t1'></div>
      <div className='tab1-text' id='t1t'>Action</div>
      <div className='tab1-cross' id='t1c' onClick={(e) => { border_action(e) }}>X</div>
      <div className='tab2' id='t2'></div>
      <div className='tab2-text' id='t2t'>Drama</div>
      <div className='tab2-cross' id='t2c' onClick={(e) => { border_drama(e) }}>X</div>
      <div className='tab3' id='t3'></div>
      <div className='tab3-text' id='t3t'>Romance</div>
      <div className='tab3-cross' id='t3c' onClick={(e) => { border_romance(e) }}>X</div>
      <div className='tab4' id='t4'></div>
      <div className='tab4-text' id='t4t'>Thriller</div>
      <div className='tab4-cross' id='t4c' onClick={(e) => { border_thriller(e) }}>X</div>
      <div className='tab5' id='t5'></div>
      <div className='tab5-text' id='t5t'>Western</div>
      <div className='tab5-cross' id='t5c' onClick={(e) => { border_western(e) }}>X</div>
      <div className='tab6' id='t6'></div>
      <div className='tab6-text' id='t6t'>Horror</div>
      <div className='tab6-cross' id='t6c' onClick={(e) => { border_horror(e) }}>X</div>
      <div className='tab7' id='t7'></div>
      <div className='tab7-text' id='t7t'>Fantasy</div>
      <div className='tab7-cross' id='t7c' onClick={(e) => { border_fantasy(e) }}>X</div>
      <div className='tab8' id='t8'></div>
      <div className='tab8-text' id='t8t'>Music</div>
      <div className='tab8-cross' id='t8c' onClick={(e) => { border_music(e) }}>X</div>
      <div className='tab9' id='t9'></div>
      <div className='tab9-text' id='t9t'>Fiction</div>
      <div className='tab9-cross' id='t9c' onClick={(e) => { border_fiction(e) }}>X</div>
      <img className='warning-symbol' src={Warning} alt='' id='ws'></img>
      <div className='warning-symbol-text' id='wst'>Minimum 3 category required</div>
    </div>
  )
}

export default Genres;