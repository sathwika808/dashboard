import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [CommonModule , FormsModule ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent   {
 
  // ngOnChanges(changes: SimpleChanges): void {
  // console.log("child onchanegs")
  // }
  // ngOnInit(): void {
  //   console.log("child oninit")
  // }
  //  ngOnDestroy(): void {
  //   console.log("child ondestroy")
  // }
  // @Input() user1 !:string 
@Input() list !:{name:string , prio:string}[]

}