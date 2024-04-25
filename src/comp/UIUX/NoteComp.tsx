"use client";

import React from 'react';
import '../style/note.scss';
import { useEffect, useState, useRef } from 'react';
import NoteView from './NoteView';


function NoteComp({ obj }: any) {

    const [noteView, setNoteView] = useState(false);

    const NoteViewClick = () => {

        // console.log(obj)
        setNoteView(true)

    }

    return (
        <>
            {noteView ? <NoteView setNoteView={setNoteView} obj={obj} /> : ''}
            <div className='mapMemo' onClick={() => { NoteViewClick() }}>
                <div className='mContents'>
                    <b>{obj.title ? obj.title : "제목 없음"}</b>
                    <p>{obj.contents ? obj.contents : "내용 없음"}</p>
                </div>

                {
                    obj.url &&
                    <div className='imgIcon'>
                        <img src="/images/img.png" alt="imgError" />
                    </div>
                }



                <div className='memoDate' style={{ backgroundColor: obj.color }}>
                    <span>{obj.date}</span>
                </div>

                <div className='bookmark'>
                    <img src={obj.bookmark == 'true' ? "/images/bookmark_on.png" : "/images/bookmark_off.png"} alt="bookmark" />
                </div>
            </div>

        </>
    );
}

export default NoteComp;