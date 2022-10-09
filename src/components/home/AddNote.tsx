import { useState } from "react";

export const  AddNote = ({handleAddNote}) =>{

    const [noteText, setNoteText] = useState('');
    const [counter, setCounter] = useState(200); 

    const handleChange=(event)=>{
        if (200 - event.target.value.length >= 0){
            setNoteText(event.target.value)
            setCounter(200-event.target.value.length)
        }
    }

    const  addYourNote = (event)=> {
            handleAddNote(noteText)
            setNoteText('');
            event.preventDefault()
            setCounter(200)

      }

    return(
        <>
        <form className="flex flex-col flex-wrap h-96 w-96 bg-green-300 rounded-md" onSubmit={addYourNote}>
            <textarea  className="w-82 h-80 bg-green-100 p-4 resize-none outline-none rounded-md" name='note' onChange={handleChange} placeholder='Type to add a note...' value={noteText}></textarea>
            <div className="flex items-center justify-between p-4">
                <div className={`${counter == 0 ? 'text-red-600' : ''}`}>{counter}</div>
                <button type="submit">Add Note</button>
            </div>

        </form>
        </>
    )
}