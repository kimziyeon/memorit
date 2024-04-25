"use client";

import React from 'react';
import '../style/note.scss';
import { useStore } from '../store/note_store';
import { useEffect, useState, useRef } from 'react';
import UpdateUpload from '../service/UpdateUpload';
import { ref, listAll, getDownloadURL, deleteObject, uploadBytes } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { NoteData } from '../../type/datatype';


interface NoteVeiwProps {
    obj: NoteData;
    setNoteView: React.Dispatch<React.SetStateAction<boolean>>;
}


function NoteView({ setNoteView, obj }: NoteVeiwProps) {
    // console.log(obj)

    let { data2, dataFetch2 } = useStore();
    let [upInput, setUpInput] = useState(obj.title);
    let [upTextarea, setUpTextarea] = useState(obj.contents);
    let [upBookmark, setUpBookmark] = useState(obj.bookmark);
    let [upColor, setUpColor] = useState(obj.color);

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


    const noteUpdateValue = async (id: number) => {
        alert('저장중입니다. 확인을 누르고 잠시만 기다려주세요')

        let url = '';
        if (file) {
            const storageRef = ref(storage, obj.id + "/" + file.name);
            const a = await uploadBytes(storageRef, file)
            url = await getDownloadURL(ref(storage, a.metadata.fullPath));
            console.log('file')
        } else if (obj.url) {
            url = obj.url;
            console.log(obj.url,"asdasd")
        }

        let updateValue = {
            id: obj.id,
            title: upInput,
            contents: upTextarea,
            color: upColor,
            bookmark: upBookmark,
            url: url
        }
        // console.log(updateValue,"updatedata")
        dataFetch2('update', updateValue);
        setNoteView(false);
    }

    //========================================================

    const [detail, setDetail] = useState(false);
    let [preImg, setPreImg] = useState('');
    let [file, setFile] = useState<any>(null);

    const detailDelete = () => {
        // setPreImg('')
        // setDetail(false)
        // setFile(null)

        deleteObject(ref(storage, imgList[0].fullPath));
        setDetail(false);
        obj.url = '';
        setImgList((item: any) => {
            return item.filter((obj: any) => obj.fullPath != imgList[0].fullPath)
        })
    }
    const [imgList, setImgList] = useState<any>([]);

    async function getImages() {
        setDetail(true)
        const storageRef = ref(storage, String(obj.id));
        listAll(storageRef)
            .then(async (res) => {
                let imgArr: any = [];
                for (let value of res.items) {
                    const url = await getDownloadURL(value);
                    imgArr.push({ url, fullPath: value.fullPath })
                }
                setImgList(imgArr)
                if (imgList[0] == undefined) {
                    return <p>로딩중</p>
                }
            });
            
        }
        
        

    return (
        <>

            {
                detail ?
                    <>
                        <div className='detailImgBack' onClick={() => { setDetail(false) }}>
                        </div>
                        <div className='detailImg'>
                            <p><img src={obj.url} alt="imgError" /></p>
                            <img src="/images/delete_gray.png" alt="delete" onClick={detailDelete} />
                        </div>
                    </>
                    : ''
            }


            <div className='addBack' onClick={() => { offClick() }}></div>

            <article className='addMemo'>
                <div className='addMemoC1'>

                    <div className='iconBlock'>
                        <UpdateUpload setFile={setFile} file={file} setPreImg={setPreImg} upUrl={obj.url} />
                        <img src="/images/delete_gray.png" alt="delete" onClick={() => { noteDelete() }} />
                    </div>


                    <p style={{ color: obj.color }} onClick={() => { noteUpdateValue(obj.id) }}>저장</p>
                </div>

                <div className='addMemoC2'>

                    {
                        obj.url ?
                        <p className='imgAdd'><img src={obj.url} alt="preImg" onClick={() => { getImages() }} /></p> :''
                    }
                    {/* 이미지 삭제 */}

                    {preImg ? <p  className='imgAdd'><img src={preImg} alt="preImg" onClick={()=>getImages()} /></p> : ''} 
                    {/* 이미지 없으면 안보임 (프론트) */}


                    <form onSubmit={submit}>
                        <input type="text" value={upInput} placeholder='제목을 입력하세요.' onChange={(e) => { setUpInput(e.target.value) }} />
                        <textarea name="내용" value={upTextarea} placeholder='내용을 입력하세요.' onChange={(e) => { setUpTextarea(e.target.value) }}></textarea>
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