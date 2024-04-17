import {queryExecute} from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// export async function DELETE(req:any,{params}:any){
//     console.log(params.seq)
//     const data = await queryExecute('delete from todolist where id=?',[params.seq]);
    
//     return NextResponse.json(data);
// }

// export async function PUT(req:any,{params}:any){
//     let d = await req.json();
//     let value = params.seq;
//     let data:any = {}

//     if(d.complete){
//         data = await queryExecute('update todolist set complete=? where id=?',[d.complete,value]);
//     } else{
//         data = await queryExecute('update todolist set contents=? where id=?',[d.contents,value]);
//     }
    
//     return NextResponse.json(data);
// }
