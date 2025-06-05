import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  c:number=0;
 
inc(){
 this.c+=1
}
rest(){
  this.c =0
}
dec(){
  this.c-=1
}
}
