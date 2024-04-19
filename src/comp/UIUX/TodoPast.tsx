"use client";
import React from 'react';
import '../style/todo.scss';
import { useStore } from '../store/todo_store';
import {useEffect, useState} from 'react';


function TodoPast({pData,d}:any) {

    let {data, dataFetch} = useStore();
    let [check, setCheck] = useState(false);
    
    const sortedData = [...pData].sort((a: any, b: any) => new Date(b).getTime() - new Date(a).getTime());
    

    const pastDataCheck = (obj:any)=>{

        setCheck(!check)

        let upCheckValue ={
            id:obj.id,
            complete : String(!check)
        }
        dataFetch('update',upCheckValue)
    }

    const pastDataDelete= (obj:any)=>{
        // console.log('click'+obj.id)
        dataFetch('delete',obj.id)
    }


    return (
        <div className="pastDate">
            {
                 sortedData.map((obj: any, k: number) => (
                    <div key={k}>
                        <p className='line'>{obj}</p>

                        {Array.from(new Set(d[obj])).map((item: any, k: number) => (

                            <div key={k} className='past'>
                                <img src={item.complete == 'true' ? '/images/checkOn.png':'/images/checkOff.png'} onClick={()=>{pastDataCheck(item)}}  className='pastCheck'alt="check" />
                                <p>{item.contents}</p>
                                <img src='/images/delete_gray.png' onClick={()=>{pastDataDelete(item)}} className='pastDelete' alt="delete"/>
                            </div>
                            

                        ))}
                    </div>
                ))
            }
        </div>
    );
}

export default TodoPast;