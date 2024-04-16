import {queryExecute} from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req:any,{params}:any){
    console.log(params.seq)
    const data = await queryExecute('delete from todolist where id=?',[params.seq]);
    
    return NextResponse.json(data);
}

export async function PUT(req:any,{params}:any){
    let d = await req.json();
    let value = params.seq;
    let data:any = {}

    if(d.complete){
        data = await queryExecute('update todolist set complete=? where id=?',[d.complete,value]);
    } else{
        data = await queryExecute('update todolist set contents=? where id=?',[d.contents,value]);
    }
    
    return NextResponse.json(data);
}

//seq데이터 값이 d로 들어옴

//if문

//(체크버튼 수정 - complete )
//d의 complete'true'/'false'값은 문자이기 때문에 true임!
//바로 if작동

//(내용 수정 - contents)
//else가 작동