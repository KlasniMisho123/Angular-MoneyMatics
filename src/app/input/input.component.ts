import { Component, EventEmitter, Output } from '@angular/core';
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
  
  initialInvestment = 0;
  annualInvestment = 0;
  duration = 0;
  expectedReturn = 0;
  
  userInputData:UserInputData = {
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0
  }
  
  setData() {
    this.userInputData = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn
    }
  }

  clearData() {
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.duration = 0;
    this.expectedReturn = 0;

    this.userInputData = {
      initialInvestment: 0,
      annualInvestment: 0,
      duration: 0,
      expectedReturn: 0
    }
  }

  onSubmit() {
    this.setData()
    this.calculate.emit(this.userInputData)
    // this.clearData() 
  }
}
