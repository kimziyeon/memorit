"use client";
import React from 'react';
import '../style/todo.scss';
import { useStore } from '../store/todo_store';
import {useEffect, useState} from 'react';


function TodoComp({obj}:any) {

    let {data, dataFetch} = useStore();

    let [check, setCheck] = useState(false);
    let [activeNum,setActiveNum] = useState(false);
    let [activePut,setActivePut] = useState(false);
    let [upInput,setUpInput] = useState<any>([]);


    const todoContrl = {
        todoClick : ()=>{
            setActiveNum(!activeNum) 
        },

        putClick : ()=>{
            setUpInput(obj.contents)
            setActivePut(!activePut)
        },

        dataDelete : ()=>{
            dataFetch('delete',obj.id)
            setActiveNum(!activeNum) 
        },

        updateInput : (e:any)=>{
            e.preventDefault();
            
            let upInputValue = {
                id:obj.id,
                contents: upInput
            }
            
            dataFetch('update',upInputValue)
            setActivePut(false);  //put -------------active 끔
            setActiveNum(false);   //transform -----------active 끔
            // console.log('click'+upInput)
        },
        
        checkHandle : ()=>{
            setCheck(!check)

            let upCheckValue ={
                id:obj.id,
                complete : String(!check)
            }
            dataFetch('update',upCheckValue)
        }
    }
    
    return (
        <>
            <div className={activeNum ?'checkList active':'checkList'} >

                <div className='checkBox'>
                    <div className='check'>
                        <img src={obj.complete == 'true' ? '/images/checkOn.png':'/images/checkOff.png'} onClick={()=>{todoContrl.checkHandle()}}/>
                        <p>{obj.contents}</p>
                    </div>

                    <div className='btnMore' onClick={()=>{todoContrl.todoClick()}}>
                        <img src="/images/more_gray.png" alt="more" />
                    </div>
                </div>

                <div className='btnList'>
                    <img src="/images/put.png" alt="수정" onClick={()=>{todoContrl.putClick()}}/>
                    <img src="/images/delete.png" alt="삭제" onClick={()=>{todoContrl.dataDelete()}} />

                </div>

                <div className={activePut?'putList active':'putList'}>
                    <form onSubmit={(e)=>{todoContrl.updateInput(e)}}>
                        <input type="text"  value={upInput} onChange={(e)=>{setUpInput(e.target.value)}}/>
                        <button>저장</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TodoComp;