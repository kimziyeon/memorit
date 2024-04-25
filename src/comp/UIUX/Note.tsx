"use client";

import React from 'react';
import '../style/note.scss';
import { useStore } from '../store/note_store';
import {useEffect, useState, useRef} from 'react';
import AddNote from './AddNote';
import NoteComp from './NoteComp';
import NoteSearch from './NoteSearch';
import Loading from './Loading';
import { NoteData } from '../../type/datatype';

function Note() {

    const {data2, dataFetch2} = useStore();
    const [addNote, setAddNote] = useState(false);
    const [searchData, setSearchData] = useState<NoteData[]>([]);


    
    const addClick = () => {
        // console.log(addNote)
        setAddNote(true)
    }

    //전체데이터// 들어온거 확인하려면 /api2 주소확인
    useEffect(()=>{
        dataFetch2("all")
    },[])

    
    useEffect(()=>{
        setSearchData(data2)
        // console.log(searchData)
    },[data2])


    const sortedData = [...searchData].sort((a, b) => {
        const dateA = new Date(a.date.replace(/\./g, '/'));
        const dateB = new Date(b.date.replace(/\./g, '/'));
        return dateB.getTime() - dateA.getTime();
    });

    const sorteDataBook = sortedData.sort((a, b) => (a.bookmark == "true" && b.bookmark == "false") ? -1 : 0);



    if(data2.length ==0){
        return <Loading/>
    }


    return (
        <main>
            {addNote ? <AddNote setAddNote={setAddNote} /> : ''}

            <div className='serchInput'>
                <NoteSearch data2={data2} setSearchData={setSearchData}/>
            </div>

            <article className='noteArticle'>
                <div className='newMemo' onClick={addClick}>
                    <p><img src="/images/add.png" alt="memoAdd" /></p>
                    <div className='memoGray'></div>
                </div>

                {sorteDataBook.map((obj, k)=>(
                    
                    <NoteComp obj={obj}  key={k}/>
                ))
                }

            </article>
        </main>
    );
}

export default Note;