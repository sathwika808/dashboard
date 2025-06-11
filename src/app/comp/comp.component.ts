import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp',
  imports: [CommonModule , FormsModule],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
  
  name = "" ; 
  sub = "";
  ts1=0;
  ts2=0;

  a="";
  onclick(){
     const total = this.ts1+this.ts2
    this.a=`Hello ${this.name} ! Your Score in ${this.sub} is ${total}`
  }
}
