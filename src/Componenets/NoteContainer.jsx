import { useEffect,useState } from 'react';
import '../CSS/NoteContainer.css'

function NoteContainer() {
    const notes = []
    const [notesList, setNotesList] = useState(notes);
    function onAddClick(e) {
        e.preventDefault()
        // alert(` was clicked`)
        setNotesList(current => [...current, <div className='noteCard'>newNote</div>])
        console.log("clickedAdd");
        console.log(notesList);    
    }
    return(notesList,
        <>
    <form id='NoteContainer' action="submit">
        <textarea name="noteText" id="noteText" value={"NoteTest"}></textarea>
        <button id='addNoteBut' onClick={onAddClick}>add note</button>
        <div id='NoteCardsContainer'>
        {notesList}
    </div>
    </form>
        </>
    )
}



export {NoteContainer } 