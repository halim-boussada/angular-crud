import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http : HttpClient) { }

  getTodos(){
   return this.http.get("http://localhost:3636/todo")
  }

  addTodo(data : any){
    return this.http.post("http://localhost:3636/todo/create" , data)
  }

  deleteTodo(id : string){
    return this.http.delete("http://localhost:3636/todo/" + id)
  }

  updateTodo(id : string , data : any) {
    return this.http.put("http://localhost:3636/todo/" + id , data)
  }
}
