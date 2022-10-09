import { AddNote } from "./AddNote"
import { Note } from "./Note"

export const  NoteList = ({notes, handleAddNote, handleDeleteNote}) =>{

    return(
        <>
        <div className="flex justify-start">
            <div className="flex gap-3 ml-auto  mr-auto flex-wrap mt-3 ">
                {notes.map((note)=> 
                    <Note {...note} handleDeleteNote={handleDeleteNote}/>
                )}
                    <AddNote handleAddNote={handleAddNote}/>
            </div>   
        </div>


        </>
    )
}