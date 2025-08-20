import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import type { UserInputData } from '../investent-input.model';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {
  @Output() calculate = new EventEmitter<UserInputData>;
  
  initialInvestment = signal("0");
  annualInvestment = signal("0");
  duration = signal("5");
  expectedReturn = signal("10");
  
  userInputData:UserInputData = {
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 5,
    expectedReturn: 0
  }
  
  setData() {
    this.userInputData = {
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      duration: +this.duration,
      expectedReturn: +this.expectedReturn
    }
  }

  onSubmit() {
    this.setData()
    this.calculate.emit(this.userInputData)
  }
}
