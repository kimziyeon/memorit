import { NextRequest, NextResponse } from 'next/server';
import {queryExecute} from '@/lib/db';

const sql = 'select * from todolist';


export async function GET(){
    const data = await queryExecute(sql,"");
    // const data = JSON.parse(JSON.stringify(getData))
    return NextResponse.json(data);
}

export async function POST(req:any){
    const aa = await req.json();
    console.log(aa,"asdasdsdadsadsa")
    const data = await queryExecute('insert into todolist (id,complete,contents,date) values (?,?,?,?)', [aa.id,aa.complete,aa.contents,aa.date]);
    // const data = JSON.parse(JSON.stringify(getData))
    return NextResponse.json(data);
}