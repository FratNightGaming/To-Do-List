import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit
{
  //title not needed - delete soon
  title:string = "Task";

  tasks:Task[] = [];
  
  constructor(){}

  ngOnInit(): void 
  {
    this.tasks = 
    [
      {task:"clean room", completed:true},
      {task:"make breakfast", completed:true},
      {task:"apply to jobs", completed:false},
      {task:"work on project", completed:true},
      {task:"workout at gym", completed:false},
      {task:"eat lunch", completed:true},
      {task:"play video games", completed:false},
      {task:"network on LinkedIn", completed:true},
      {task:"eat dinner", completed:false},
      {task:"read a book", completed:true}
    ]
  }
}
