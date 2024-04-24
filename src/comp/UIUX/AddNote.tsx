"use client";

import React from 'react';
import '../style/note.scss';
import { format } from 'date-fns';
import { useState } from 'react';
import { useStore } from '../store/note_store';
import Upload from '../service/Upload';

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";


function AddNote({ setAddNote }: any) {

    let { data2, dataFetch2 } = useStore();

    const today = new Date();
    let todayFormat = format(today, "yyyy.MM.dd");
    let [title, setTitle] = useState('');
    let [contents, setContents] = useState('');
    let [colorNum, setColorNum] = useState(1);
    let [color, setColor] = useState('#D2D2D4');
    let colorPalette = [
        '#D2D2D4', '#4385F5', '#34A853', '#FCBC05', '#E8463B'
    ]
    let [bookMark, setBookMark] = useState(false);

    const offClick = () => {
        setAddNote(false);
    }

    //데이터 추가
    const dataAdd = async () => {

        let num = Date.now()
        let url = '';
        if (file) {
            const storageRef = ref(storage, num + "/" + file.name);
            const a = await uploadBytes(storageRef, file)
            url = await getDownloadURL(ref(storage, a.metadata.fullPath));
        }
        //파이어베이스 업로드 이미지 들어가는 함수! 폴더이름,파일이름,이미지 url주소

        let dataValue = {
            'id': num,
            'title': title,
            'contents': contents,
            'date': todayFormat,
            'color': color,
            'bookmark': String(bookMark),
            'url': url
        }
        dataFetch2('post', dataValue)

        setAddNote(false);
    }

    const submit = (e: any) => {
        e.preventDefault();
    }

    const colorClick = (colorNum :number) => {
        // console.log('click'+colorPalette[0])
        // console.log(colorPalette[colorNum])

        setColor(colorPalette[colorNum])

    }

    const bookMarkClick = () => {
        setBookMark(!bookMark)
    }
    //=====================여기서부터 파이어베이스입니다===========================

    let [detail, setDetail] = useState(false);
    let [preImg, setPreImg] = useState('');
    let [file, setFile] = useState<any>(null);

    const detailView = () => {
        setDetail(true)
    }

    const detailDelete = () => {
        setPreImg('')
        setDetail(false)
        setFile(null)
    }

    //====================여기까지 파이어베이스였습니다.===============================

    return (
        <>

            {
                detail ?
                    <>
                        <div className='detailImgBack' onClick={() => { setDetail(false) }}>
                        </div>
                        <div className='detailImg'>
                            <p><img src={preImg} onClick={() => { setDetail(false) }} /></p>
                            <img src="/images/delete_gray.png" alt="delete" onClick={detailDelete} />
                        </div>
                    </>
                    : ''
            }


            <div className='addBack' onClick={offClick}></div>

            <article className='addMemo'>
                <div className='addMemoC1'>

                    <div className='iconBlock'>
                        <Upload setFile={setFile} file={file} setPreImg={setPreImg} />
                    </div>

                    <p onClick={dataAdd} style={{ color: color }}>저장</p>
                </div>
                <div className='addMemoC2'>
                    {
                        preImg ?
                            <p className='imgAdd'><img src={preImg} alt="preImg" onClick={() => { detailView() }} /></p>
                            : ''
                    }
                    <form onSubmit={submit}>
                        <input type="text" placeholder='제목을 입력하세요.' onChange={(e) => { setTitle(e.target.value) }} />
                        <textarea name="내용" id="" placeholder='내용을 입력하세요.' onChange={(e) => { setContents(e.target.value) }}></textarea>
                    </form>

                    <div className='addMemoC3' style={{ backgroundColor: color }}>
                        <div className='colorPalette'>
                            <img src="/images/btn_blue.png" alt="btn_blue"  onClick={() => { colorClick(1) }} />
                            <img src="/images/btn_green.png" alt="btn_green"  onClick={() => { colorClick(2) }} />
                            <img src="/images/btn_yellow.png" alt="btn_yellow"  onClick={() => { colorClick(3) }} />
                            <img src="/images/btn_red.png" alt="btn_red"   onClick={() => { colorClick(4) }} />

                        </div>
                        <div className='bookmark' onClick={() => { bookMarkClick() }}>
                            <img src={bookMark == true ? "/images/bookmark_large_on.png" : "/images/bookmark_large_off.png"} alt="bookmarkLarge" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default AddNote;