import axios from "axios";
import {create} from "zustand";
const request = axios.create({
    baseURL : "/api2"
})
export const useStore = create<any>((set:any)=>{
    return{
        data2 : [], //서버에 있는 데이터 넣을 장소
        dataFetch2 : async function(type:any,colum:any){   //서버에 연결하는 함수
            
            let note:any={};

            //서버 수정하는곳
            switch(type){
                case "all" : note = await request.get('/'); 
                break;
                case "delete" : await request.delete(`/${colum}`); 
                break;
                case "post" : await request.post('/',colum);
                break;
                case "update" : await request.put(`/${colum.id}`,colum);
                break;
            }
   

            //프론트(화면)에 던져줄곳
            set( (state:any)=>{

                if(type=='delete'){
                    note.data = state.data2.filter((obj:any) => obj.id != colum)
                } else if(type=='post'){
                   note.data = [...state.data2,colum]
                }

                else if (type == 'update'){
                    let d = state.data2.filter((obj:any)=>obj.id == colum.id)
                    d[0].title = colum.title;
                    d[0].contents = colum.contents;
                    d[0].color = colum.color;
                    d[0].bookmark = colum.bookmark;
                    d[0].url = colum.url;
                    note.data = state.data2;
                }
                return {data2 : note.data};
            })
        }
    }
})

//