import React from 'react';
import '../style/note.scss';
import { format } from 'date-fns';
import { useState } from 'react';
import { useStore } from '../store/note_store';


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
    const dataAdd = () => {
        let dataValue = {
            'id': Date.now(),
            'title': title,
            'contents': contents,
            'date': todayFormat,
            'color': color,
            'bookmark': String(bookMark),
            'url': ''
        }
        dataFetch2('post', dataValue)

        setAddNote(false);
    }

    const submit = (e: any) => {
        e.preventDefault();
    }

    const colorClick = () => {
        // console.log('click'+colorPalette[0])
        // console.log(colorPalette[colorNum])

        setColor(colorPalette[colorNum])
        setColorNum(colorNum + 1)
        if (colorNum == 5) {
            setColorNum(0)
        }
    }

    const bookMarkClick = () => {
        setBookMark(!bookMark)
    }


    return (
        <>
            <div className='addBack' onClick={offClick}></div>

            <article className='addMemo'>
                <div className='addMemoC1'>
                    <div className='more'>
                        <img src="/images/more_gray.png" alt="more_gray" />
                    </div>
                    <p onClick={dataAdd} style={{ color: color }}>저장</p>
                </div>
                <div className='addMemoC2'>

                    <form onSubmit={submit}>
                        <input type="text" placeholder='제목을 입력하세요.' onChange={(e) => { setTitle(e.target.value) }} />
                        <textarea name="내용" id="" placeholder='내용을 입력하세요.' onChange={(e) => { setContents(e.target.value) }}></textarea>
                    </form>

                    <div className='addMemoC3' style={{ backgroundColor: color }}>
                        <div className='colorPalette' onClick={() => { colorClick() }}>
                            <img src="/images/colorp.png" alt="colorp" />
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