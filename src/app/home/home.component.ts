import { Component } from '@angular/core'
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
   constructor(private todoservice : TodoService){}
  todoList : any
  newtodo : string = ""
  ngOnInit(){
     this.todoservice.getTodos().subscribe((data)=>{
       this.todoList = data
       console.log(data)
     })
  }
  setInputvalue(e : any){
    this.newtodo = e.target.value
  }

  add(){
     this.todoservice.addTodo({todo : this.newtodo}).subscribe((data)=>{
      this.ngOnInit()
     })
  }

  del(id : string){
    console.log(id)
    this.todoservice.deleteTodo(id).subscribe(()=>{
       this.ngOnInit()
    })
  }
  update(id : string){
    console.log(id)
    this.todoservice.updateTodo(id , { todo : this.newtodo}).subscribe(()=>{
      this.ngOnInit()
    })
  }
}
