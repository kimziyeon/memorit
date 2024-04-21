"use client";
import React, { useRef } from 'react';

function UpdateUpload({ setFile, file, setPreImg }: any) {




    return (
        <div className='iconList'>
            <form>
                <img src="/images/addPhote.png" alt="addPhoto" />
                <input className='upload' type="file" style={{ display: "none" }} name='photo' />
            </form>
        </div>
    );
}

export default UpdateUpload;