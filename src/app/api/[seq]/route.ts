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
    console.log(d,'0');
    console.log(value,'1')
    if(d.contents=='false'){
        data = await queryExecute('update todolist set complete=? where id=?',["true",value]);
    } else if(d.contents =='true'){
        data = await queryExecute('update todolist set complete=? where id=?',["false",value]);
    } else{
        data = await queryExecute('update todolist set contents=? where id=?',[d.contents,value]);
    }
    
    return NextResponse.json(data);
}