import { NextRequest, NextResponse } from 'next/server';
import {queryExecute} from '@/lib/db';

const sql = 'select * from note';


export async function GET(){
    const data2 = await queryExecute(sql,"");
    // const data = JSON.parse(JSON.stringify(getData))
    return NextResponse.json(data2);
}

export async function POST(req:any){
    const aa = await req.json();
    console.log(aa,"asdasdsdadsadsa")
    const data2 = await queryExecute('insert into note (id,title,contents,date,color,bookmark,url) values (?,?,?,?,?,?,?)',
     [aa.id,aa.title,aa.contents,aa.date,aa.color,aa.bookmark,aa.url]);
    // const data = JSON.parse(JSON.stringify(getData))
    return NextResponse.json(data2);
}