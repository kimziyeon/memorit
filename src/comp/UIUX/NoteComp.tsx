"use client";

import React from 'react';
import '../style/note.scss';
import {useEffect, useState, useRef} from 'react';

function NoteComp({obj}:any) {
    console.log(obj)

    return (
    
        <div className='mapMemo'>
            <div className='mContents'>
                <b>{obj.title}</b>
                <p>{obj.contents}</p>
            </div>
            
            <div className='memoDate'>
                <span>{obj.date}</span>
            </div>

            <div className='bookmark'>
                <img src={obj.complete=='true'?"/images/bookmark_on.png":"/images/bookmark_off.png"} alt="bookmark" />
            </div>
        </div>

        
    );
}

export default NoteComp;