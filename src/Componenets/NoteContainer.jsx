import { useEffect,useState } from 'react';
import '../CSS/NoteContainer.css'
import Cards from './Cards.jsx'
// import Model from './Model'

const NoteContainer = () => { 

  const[titleCard,setTitleCard] =useState("0")
      function onAddClick2(e) {


        e.preventDefault()

}  
    return(
        <>
      <form id='NoteContainer' action="submit">
      <textarea name="noteTitle" id="noteTitle" 
      defaultValue={"x"}
      onChange={(event)=>{setTitleCard(event.target.value)}}
      >
      </textarea>
      <textarea name="noteText" id="noteText" value={"NoteTest"}></textarea>
      <button id='addNoteBut' onClick={onAddClick2}>add note</button>
    </form>
      <Cards titleCard={titleCard}/>
        </>
    )
}



export {NoteContainer } 