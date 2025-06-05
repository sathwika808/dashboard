import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from './comp/comp.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { FormsModule } from '@angular/forms';
import { Assigment3Component } from './assigment-3/assigment-3.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet , CompComponent, CommonModule ,CounterComponent , FormsModule ,Assigment3Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
}

