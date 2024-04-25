
export interface NoteData {
    id:number,
    title:string | null,
    contents:string | null,
    date:string,
    color:string,
    bookmark:string,
    url:string | null
}



export interface TodoData {
    id:number,
    complete:string,
    contents:string | null,
    date:string
}