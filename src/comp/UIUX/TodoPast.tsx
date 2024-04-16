"use client";
import React from 'react';
import '../style/todo.scss';
import { useStore } from '../store/todo_store';
import {useEffect, useState} from 'react';


function TodoPast({obj}:any) {

    let {data, dataFetch} = useStore();

    return (
        <>
            <div className='pastDate'>
                <p className='line'>
                    <span>{obj.date}</span>
                </p>
                
                <div className='past'>
                    <img src="/images/checkOn.png" alt="checkOn" />
                    <p>{obj.contents}</p>
                </div>
            </div>
        </>
    );
}

export default TodoPast;