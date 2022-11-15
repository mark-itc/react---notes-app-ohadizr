import { useEffect,useState } from 'react';
import '../CSS/NoteContainer.css'
let testNoteCounter=0
function NoteContainer() {
    const notes = []

    const [notesList, setNotesList] = useState(notes);
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      
      let h = addZero(date.getHours());
      let ampm = h >= 12 ? 'pm' : 'am';
      let m = addZero(date.getMinutes());
      let time = h + ":" + m +" "+ampm;

    let currentDate = `${day}-${month}-${year}`;

    function onAddClick(e) {
        e.preventDefault()
        testNoteCounter++
        let cardCount=testNoteCounter
        setNotesList(current => [...current, <div className={"counter"+cardCount} >
            <div className='noteCardTitle'>Note title </div> 
           <div className='noteTextCard'>newNote {cardCount}</div> 
           <div className='currentDateCard' >{currentDate} {time}</div>
           <button  onClick={(e)=>{
                    e.preventDefault(e)

                    const confirmBox = window.confirm("Do you really want to delete this Card?")
                      if (confirmBox === true) {
                        console.log("delete");
                        document.querySelector(".counter"+cardCount).remove()
                      }
                    
           }} >X</button>
           
           </div>])
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