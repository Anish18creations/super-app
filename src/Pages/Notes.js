import React from 'react';
import styles from '../Styles/Notes.module.css';
//import { useNavigate } from 'react-router-dom';

function Notes() {

  //let navigate = useNavigate();

function Store(e){
  let note = e.target.value;

let writtennote = JSON.stringify(note);
    
localStorage.setItem(
  "Note",
  writtennote
)

}

  return (
    <div>
        <div className={styles.allnotes}>All notes</div>
        <textarea className={styles.Notes} onChange={(e)=>Store(e)} />
    </div>
  )
}

export default Notes;