import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent , CommonModule , FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent   {
  // ischild = true
  // user=""
  // ngOnInit(): void {
  //   console.log("parent oninit")
  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("parent onchanes")

  // }
  // ngOnDestroy(): void {
  //   console.log("parent desstroy")

  // }
taskInput="";
prioInput = "";
taskList :{name:string , prio : string}[]=[]
addTask(){
if(this.taskInput && this.prioInput){
  this.taskList.push({name:this.taskInput , prio:this.prioInput})
}
}

}
