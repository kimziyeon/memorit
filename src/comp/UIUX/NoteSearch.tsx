"use client";

import React from 'react';
import '../style/note.scss';
import {useEffect, useState, useRef} from 'react';


function NoteSearch({data2,setSearchData}:any) {
    
    // console.log(data2)
    const [searchInput, setSearchInput] = useState('');
    const [searchValue,setSearchValue] = useState([]);


    const submitSearch=(e:any)=>{
        e.preventDefault();

        let d = data2.filter((obj:any)=>(
            (obj.title.includes(searchInput) || obj.contents.includes(searchInput))
        ))

        setSearchValue(d);
        console.log(searchValue)
    }

    useEffect(()=>{
        setSearchData(searchValue)
    },[searchValue])

    return (

        <>
            <form className='searchForm' onSubmit={submitSearch}>
                <img src="/images/search.png" alt="search" />
                <input type="text" placeholder='메모 검색' onChange={(e)=>{setSearchInput(e.target.value)}} />
            </form>
        </>

        );
    }
    
    export default NoteSearch;