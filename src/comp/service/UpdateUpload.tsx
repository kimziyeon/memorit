"use client";
import React, { useRef } from 'react';

function UpdateUpload() {




    return (
        <div className='iconList'>
            <form>
                <img src="/images/addPhote.png" alt="addPhoto" />
                <input className='upload' type="file" style={{ display: "none" }} name='photo' />
            </form>
            <img src="/images/delete_gray.png" alt="delete" />

        </div>
    );
}

export default UpdateUpload;