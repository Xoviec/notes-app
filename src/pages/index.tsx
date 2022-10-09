import { nanoid } from "nanoid";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { string } from "zod";
import { Header } from "../components/home/Header";
import { NoteList } from "../components/home/NoteList";
import { Search } from "../components/home/Search";



const Home: NextPage = () => {

  // const [notes, setNotes] = useState(
  //   [
  //   {
  //     id: nanoid(),
  //     text: 'sample',
  //     date: 'sample'
  //   },


  // ]
  // )

  // const [notes, setNotes] = useState(' ')
  const [notes, setNotes] = useState([])


  //   const [notes, setNotes] = useState(
  //   [
  //   {
  //     id: String,
  //     text: String,
  //     date: String,
  //   },

  // ]
  // )



  const addNote = (text) =>{
     const date = new Date();
     const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
     }
     const newNotes = [...notes, newNote];
     setNotes(newNotes)
  }

  const [searchText, setSearchText] = useState('');




  useEffect(()=>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')!
      );


    if (savedNotes){
      setNotes(savedNotes)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  },[notes]);


  const deleteNote = (id) =>{
    const newNotes  = notes.filter((note)=> note.id !== id)
    setNotes(newNotes);
  }

  return (
    <>
        <div className="bg-slate-200 min-h-[100vh] min-w-[100vh]">
          <div className="flex flex-col flex-wrap items-start justify-star mr-12 ml-12">
            <Header></Header>
            <Search handleSearchNote={setSearchText}></Search>
            <NoteList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}></NoteList>
          </div>


        </div>
    </>
  );
};

export default Home;

