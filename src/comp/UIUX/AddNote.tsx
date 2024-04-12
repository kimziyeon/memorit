import React from 'react';
import '../style/note.scss';


function AddNote({setAddNote}:any) {

    const offClick=()=>{
        setAddNote(false);
    }

  return (
    <>
    <div className='addBack' onClick={offClick}></div>

    <article className='addMemo'>
        <div className='addMemoC1'>
            <div className='more'>
            <img src="/images/more_gray.png" alt="more_gray" />
            </div>
            <p onClick={offClick}>저장</p>
        </div>
        <div className='addMemoC2'>
            <form>
                <input type="text" placeholder='제목을 입력하세요.'/>
                <textarea name="내용" id="" placeholder='내용을 입력하세요.'></textarea>
            </form>
            <div className='addMemoC3'>
                <div className='colorPalette'>
                    <img src="/images/colorp.png" alt="colorp" />
                </div>
                <div className='bookmark'>
                    <img src="/images/bookmark_large.png" alt="bookmarkLarge" />
                </div>
            </div>
        </div>
</article>
</>
  );
}

export default AddNote;