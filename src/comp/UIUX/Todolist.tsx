"use client";
import React from 'react';
import '../style/todo.scss';
import { format } from 'date-fns';
import { useStore } from '../store/todo_store';
import {useEffect, useState, useRef} from 'react';


function Todolist() {

    const today = new Date();
    let todayFormat = format(today,"yyyy.MM.dd");
    let todayMonth=format(today, "MM");
    let todayDay = format(today,"dd");
    let todayDOW = format(today,"EEE");

    let {data,dataFetch} = useStore();
    let [activeNum,setActiveNum] = useState(-1);
    let [inputData, setInputData ] = useState('');

    let [activePut,setActivePut] = useState(-1);

    let [upInput,setUpInput] = useState<any>([]);

    let inputRef = useRef<any>();
    //인풋값 새로고침

    let upInputRef = useRef<any>(null);
    //

    //데이터 전체 불러옴! -> 콘솔확인
    useEffect(()=>{
        dataFetch("all")
    },[])


   

     //삭제, 수정시 active가 닫히기위해 다시 -1 원점으로
    useEffect(() => {
        setActiveNum(-1);
    }, [data.length]);


    //삭제 - key값을 delete 요청
    const dataDelete =(key:number)=>{
        // console.log('click' + key)
        dataFetch('delete',key)
    }

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

     //키값이 정수이므로 -1 기본값 (checkList.active)
     const todoClick =(key:number)=>{
        
        setActiveNum(key === activeNum ? -1 :key) 
        // setTodoAct(!todoAct)
        // console.log(todoAct)
    }

    //수정 - 수정할 key값 받고 (putList.active) 업데이트 후에 다시 data(obj.contents)도 추가로 받아와서 넘김
    const putClick = (key:number,data:any)=>{
        //console.log('click'+ key)  수정할 key값 확인
        console.log(data)
        setUpInput(data)
        setActivePut(key === activePut? -1 :key)
    }


    //업데이트

    const updateInput = (e:any, key:number)=>{
        e.preventDefault();
        // console.log('click'+key)
        let upInputValue = {
            id:key,
            contents: upInput
        }
        // console.log('click'+upInput)
        dataFetch('update',upInputValue)
        setActivePut(-1);  //put -------------active 끔
        setActiveNum(-1);   //transform -----------active 끔
        console.log('clickk'+upInput)
    }

    
   



    return (
        <main className='todo'>
            <div className='today'>
                <h3>TODAY</h3>
                <h2>{todayMonth}.{todayDay}</h2>
                <span>{todayDOW}</span>
            </div>
            <article className='todoArticle'>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='할 일을 입력하세요' ref={inputRef} onChange={(e)=>{dataAdd(e.target.value)}} />
                    <img src="/images/addBlue.png" alt="addBlue" onClick={onSubmit} />
                </form>
                <p>오늘 할 일 : <span>{data.length}</span>개</p>
                {data.map((obj:any, k:number)=>(
            
                    <div className={k==activeNum ?'checkList active':'checkList'} key={k} onClick={()=>{todoClick(k)}}>
                        {/* todoClick(k) 는 특정 id값이 삭제가 된 후 id값은 안바뀜!! 그래서 자동으로 정렬?되는 key값으로 써야함 */}

                        <div className='check'>
                            <img src="/images/checkOff.png" alt="checkOff" />
                            <p>{obj.contents}</p>
                        </div>

                        <div className='btnList'>
                            <img src="/images/put.png" alt="수정" onClick={()=>{putClick(k,obj.contents)}}/>
                            <img src="/images/delete.png" alt="삭제" onClick={()=>{dataDelete(obj.id)}} />
                        {/* todoClick(obj.id) 는 특정 id값이 삭제*/}

                        </div>

                        <div className={k == activePut?'putList active':'putList'}>
                            <form onSubmit={(e)=>{updateInput(e,obj.id)}}>
                                <input type="text" placeholder={obj.contents} ref={upInputRef} value={upInput} onChange={(e)=>{setUpInput(e.target.value)}}/>
                                <button>저장</button>
                            </form>
                        </div>
                    </div>

                ))}

                <div className='pastList'>

                    <div className='pastDate'>
                        <p className='line'>
                            <span>2024-04-02</span>
                        </p>
                        <div className='past'>
                            <img src="/images/checkOn.png" alt="checkOn" />
                            <p>오늘은 배불리 먹고 푹 자기</p>
                        </div>

                        
                    </div>


                </div>
            </article>
        </main>
    );
}

export default Todolist;