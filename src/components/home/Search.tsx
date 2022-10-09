import { MdSearch } from 'react-icons/md'

export const Search = ({handleSearchNote}) =>{

    return(
        <div className="flex items-center w-96 h-22 p-4 rounded-md bg-slate-300">
            <MdSearch className='mr-2 h-6 w-6'></MdSearch>
            <input onChange={(event)=>handleSearchNote(event.target.value)} className="w-[100%] bg-transparent outline-none" type="text" placeholder="Search for a note..." />
        </div>
    )
}