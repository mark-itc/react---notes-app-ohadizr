import { useEffect,useState } from 'react';
import '../CSS/NoteContainer.css'
// import Model from './Model'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
let testNoteCounter=0
let modalContent='error in card pick'
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
        setNotesList(current => [...current, 
        <div onClick={()=>{openModal(); modalContent=(
        <div className='popUp'>
        <div className='noteCardTitle'>Note title </div>
        <div className='noteTextCard'>newNote {cardCount}</div>
        <div className='currentDateCard' >{currentDate} {time}</div>
        <button onClick={closeModal}>close</button>
        </div>
        )
        
        }} className={"noteCard counter"+cardCount} >
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
                    
           }} >Cancel Card (X)</button>
           
           </div>])
        console.log("clickedAdd");
        console.log(notesList);    
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          padding: '0px',
          transform: 'translate(-50%, -50%)',
        },
      };

    return(
        <>

    <form id='NoteContainer' action="submit">
        <textarea name="noteText" id="noteText" value={"NoteTest"}></textarea>
        <button id='addNoteBut' onClick={onAddClick}>add note</button>
        <div id='NoteCardsContainer'>
        {notesList}
    </div>
    </form>
    <div>
      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div ref={(_subtitle) => (subtitle = _subtitle)}>
        <div>{modalContent}</div>
        </div>

      </Modal>
    </div>
        </>
    )
}



export {NoteContainer } 