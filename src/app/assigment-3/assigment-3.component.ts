import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
  @Component({
  selector: 'app-assigment-3',
  imports: [CommonModule  , FormsModule ],
  templateUrl: './assigment-3.component.html',
  styleUrl: './assigment-3.component.css'
})
export class Assigment3Component {
  name ="";
  score="";
  list :{name : string , score: string}[]=[]
  isTrue = false
  onClick(){
  this.isTrue = true
  this.list.push({name : this.name , score : this.score})
  }
}   
