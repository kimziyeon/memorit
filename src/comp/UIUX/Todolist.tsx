"use client";
import React from 'react';
import '../style/todo.scss';
import { format } from 'date-fns';
import { useStore } from '../store/todo_store';
import {useEffect, useState, useRef} from 'react';
import TodoComp from './TodoComp';
import TodoPast from './TodoPast';


function Todolist() {

    const today = new Date();
    let todayFormat = format(today,"yyyy.MM.dd");
    let todayMonth=format(today, "MM");
    let todayDay = format(today,"dd");
    let todayDOW = format(today,"EEE");

    let {data, dataFetch} = useStore();
    let [inputData, setInputData ] = useState('');

    let inputRef = useRef<any>();
    //인풋값 새로고침
    

    //전체 데이터
    useEffect(()=>{
        dataFetch("all")
    },[])


    //추가 - value값으로 받고 setInputData 담기
    const dataAdd =(value:any)=>{
        setInputData(value)
        // console.log(value) value값 확인
    }

    const onSubmit=(e:any)=>{
        e.preventDefault();
        // console.log(inputData) inputDat값 확인
        let inputValue = {
            'id':Date.now(),
            'complete': 'false',
            'contents': inputData,
            'date':todayFormat
        }
        //inputValue 값 객체로만들고 post요청
        dataFetch('post',inputValue)
        inputRef.current.value='';
        //인풋값 입력 후 새로고침
    }

    const todayData = data.filter((obj:any)=>obj.date == todayFormat);
    const notCheckTodayData = todayData.filter((obj:any)=>obj.complete == "false")

    const pastData = data.filter((obj:any)=>obj.date !== todayFormat);


    //지난 날짜
    let d:any = {}
    pastData.forEach((obj:any)=>{
        const {date,complete,contents,id} = obj;
        if(Object.keys(d).includes(date)){
            d[date] = [ ...d[date],{id,complete,contents}]
        }else{
            d[date] = [{id,complete,contents}]
        }
    })
    let pData = Object.keys(d);


    return (
        <main className='todo'>
            <div className='today'>
                <h3>TODAY</h3>
                <h2>{todayMonth}.{todayDay}</h2>
                <span>{todayDOW}</span>
            </div>
            <article className='todoArticle'>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='오늘 할 일을 입력하세요' ref={inputRef} onChange={(e)=>{dataAdd(e.target.value)}} />
                    <img src="/images/addBlue.png" alt="addBlue" onClick={onSubmit} />
                </form>

                <p>오늘 할 일 : {notCheckTodayData.length}개</p>

                {/* <p>오늘 할 일 : <span>{data.length}</span>개</p> */}
                
                {todayData.map((obj:any, k:number)=>(
            
                    <TodoComp obj={obj} key={k}/>

                ))}

                <div className='pastList'>
                    
                    <TodoPast pData={pData} d={d}/>
                
                </div>

            </article>
        </main>
    );
}

export default Todolist;