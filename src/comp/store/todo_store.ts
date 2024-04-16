import axios from "axios";
import {create} from "zustand";
const request = axios.create({
    baseURL : "http://localhost:3000/api",
    timeout : 1000
})
export const useStore = create<any>((set:any)=>{
    return{
        data : [], //서버에 있는 데이터 넣을 장소
        dataFetch : async function(type:any,colum:any){   //서버에 연결하는 함수
            
            let todo:any={};

            //서버 수정하는곳
            switch(type){
                case "all" : todo = await request.get('/'); 
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
                    todo.data = state.data.filter((obj:any) => obj.id != colum)
                } else if(type=='post'){
                   todo.data = [...state.data,colum]
                }

                else if (type == 'update'){
                    let d = state.data.filter((obj:any)=>obj.id == colum.id)                    
                    if(colum.complete){
                         d[0].complete = colum.complete;
                         todo.data = state.data;
                    } else{
                        d[0].contents = colum.contents;
                        todo.data = state.data;
                    }
                }
                return {data : todo.data}
            })
        }
    }
})

//