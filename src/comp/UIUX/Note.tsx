"use client";

import React from 'react';
import '../style/note.scss';
import { useStore } from '../store/note_store';
import {useEffect, useState, useRef} from 'react';
import AddNote from './AddNote';
import NoteComp from './NoteComp';

function Note() {

    const {data2, dataFetch2} = useStore();
    const [addNote, setAddNote] = useState(false);

    const addClick = () => {
        console.log(addNote)
        setAddNote(true)
    }

    //전체데이터// 들어온거 확인하려면 /api2 주소확인
    useEffect(()=>{
        dataFetch2("all")
    },[])

    

    return (
        <main>
            {addNote ? <AddNote setAddNote={setAddNote} /> : ''}
            <div className='serchInput'>
                <form>
                    <img src="/images/search.png" alt="search" />
                    <input type="text" placeholder='메모 검색' />
                </form>
            </div>
            <article className='noteArticle'>
                <div className='newMemo' onClick={addClick}>
                    <p><img src="/images/add.png" alt="memoAdd" /></p>
                    <div className='memoGray'></div>
                </div>

                {data2.map((obj:any, k:number)=>(
                    
                    <NoteComp obj={obj}  key={k}/>
                ))
                }

            </article>
        </main>
    );
}

export default Note;