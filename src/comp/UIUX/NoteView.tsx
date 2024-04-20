"use client";

import React from 'react';
import '../style/note.scss';
import { useStore } from '../store/note_store';
import { useEffect, useState, useRef } from 'react';
import UpdateUpload from '../service/UpdateUpload';

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";


function NoteView({ setNoteView, obj }: any) {
    // console.log(obj)

    let { data2, dataFetch2 } = useStore();
    let [upInput, setUpInput] = useState(obj.title);
    let [upTextarea, setUpTextarea] = useState(obj.contents);
    let [upBookmark, setUpBookmark] = useState(obj.bookmark);
    let [upColor, setUpColor] = useState(obj.color);
    let [upUrl, setUpUrl] = useState(obj.url);

    let [colorNum, setColorNum] = useState(0);
    let colorPalette = [
        '#D2D2D4', '#4385F5', '#34A853', '#FCBC05', '#E8463B']


    const offClick = () => {
        setNoteView(false)
    }


    const submit = (e: any) => {
        e.preventDefault()
    }

    const noteDelete = () => {

        dataFetch2('delete', obj.id)
        setNoteView(false)
    }

    const bookmarkClick = () => {
        setUpBookmark('true')

        if (upBookmark == 'true') {
            setUpBookmark('false')
        }
    }

    const colorClick = () => {

        setUpColor(colorPalette[colorNum])
        setColorNum(colorNum + 1)

        if (colorNum == 5) {
            setColorNum(0)
        }
    }


    const noteUpdateValue = () => {

        let updateValue = {
            id: obj.id,
            title: upInput,
            contents: upTextarea,
            color: upColor,
            bookmark: upBookmark
        }
        // console.log(updateValue,"updatedata")
        dataFetch2('update', updateValue)

        setNoteView(false)
    }

    //========================================================

    const [detail, setDetail] = useState(false);

    const detailView = () => {
        setDetail(true)
    }


    return (
        <>

            {
                detail ?
                    <>
                        <div className='detailImgBack' >
                        </div>
                        <div className='detailImg'>
                            <p><img src={upUrl} alt="imgError" /></p>
                            <img src="/images/delete_gray.png" alt="delete" />
                        </div>
                    </>
                    : ''
            }


            <div className='addBack' onClick={() => { offClick() }}></div>

            <article className='addMemo'>
                <div className='addMemoC1'>

                    <UpdateUpload />

                    <p style={{ color: obj.color }} onClick={() => { noteUpdateValue() }}>저장</p>
                </div>
                <div className='addMemoC2'>

                    {
                        upUrl &&
                        <p className='imgAdd'><img src={upUrl} alt="preImg" onClick={() => { detailView() }} /></p>

                    }

                    <form onSubmit={submit}>
                        <input type="text" value={upInput} onChange={(e) => { setUpInput(e.target.value) }} />
                        <textarea name="내용" value={upTextarea} onChange={(e) => { setUpTextarea(e.target.value) }}></textarea>
                    </form>

                    <div className='addMemoC3' style={{ background: upColor }} >
                        <div className='notedate' onClick={() => { colorClick() }} >{obj.date}</div>
                        <div className='bookmark' onClick={() => { bookmarkClick() }}>
                            <img src={upBookmark == 'true' ? "/images/bookmark_large_on.png" : "/images/bookmark_large_off.png"} alt="bookmarkLarge" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default NoteView;