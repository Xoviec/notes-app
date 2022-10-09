

export const  Note = ({id, text, date, handleDeleteNote}) =>{


    return(
        <>
            <div className=" flex flex-col flex-wrap h-96 w-96 bg-orange-300 rounded-md ">
            <p  className="max-w-82 h-80 bg-orange-100 p-4 resize-none outline-none rounded-md break-all " >{text}</p>
            <div className="flex items-center justify-between p-4">
                <div>{date}</div>
                <button onClick={()=>handleDeleteNote(id)}>X</button>
            </div>

        </div>
        </>
    )
}