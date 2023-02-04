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
  title:string = "Tasks";

  tasks:Task[] = [];

  inputTask:string = "";
  newTask:Task = {} as Task;

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

  ToggleComplete(selectedTask: Task, index: number):void
  {
    selectedTask.completed = !selectedTask.completed;

    //this.tasks[index].completed = !this.tasks[index].completed;

    //index parameter is only used with map function directly below

    // this.tasks.map((v, i) => 
    // {
    //   if (i === index)
    //   {
    //     v.completed = !v.completed;
    //   }
    // })
  }

  DeleteTask(selectedTask: Task):void
  {
    for(let i = 0; i<this.tasks.length; i++)
    {
      if(this.tasks[i] === selectedTask)
      {
        this.tasks.splice(i, 1);
      }
    }
  }

  DeleteTask2(selectedTask: Task):void
  {
    this.tasks = this.tasks.filter(t => t !== selectedTask);
  }

  AddTask():void
  {
    this.newTask.task = this.inputTask;
    this.newTask.completed = false;
    this.tasks.push(this.newTask);
    
    //must reset newTask after submitting form
    this.newTask = {} as Task;
    //this.tasks.push({task:this.inputTask, completed:false});

    //reset input text field
    this.inputTask = "";
  }

}
