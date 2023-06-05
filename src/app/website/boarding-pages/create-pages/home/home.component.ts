import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Itask } from 'src/Interfaces/Itask';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  taskToDo:Itask[]=[
    {
      id:'1',
      title:'Task 1'
    },
    {
      id:'2',
      title:'Task 2'
    },
    {
      id:'3',
      title:'Task 3'
    },
  ]
  drop(event:CdkDragDrop<any[]>){
    moveItemInArray(this.taskToDo,event.previousIndex,event.currentIndex)
  }
}
