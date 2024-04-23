import {queryExecute} from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req:any,{params}:any){
    console.log(params.seq)
    const data2 = await queryExecute('delete from note where id=?',[params.seq]);
    
    return NextResponse.json(data2);
}

export async function PUT(req:any,{params}:any){
    let d = await req.json();
    let value = params.seq;
    let data2:any = {}

    
    data2 = await queryExecute('update note set title=?,contents=?,color=?,bookmark=?,url=? where id=?',[d.title,d.contents,d.color,d.bookmark,d.url,value]);
    return NextResponse.json(data2);
}





// 'update note set complete=? where id=?'  note확인!!!!!!!!!!!!!!!

