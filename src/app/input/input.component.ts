import { Component, output, signal } from '@angular/core';
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
  calculate = output<UserInputData>();
  
  initialInvestment = signal("0");
  annualInvestment = signal("0");
  duration = signal("5");
  expectedReturn = signal("10");
  
  userInputData:UserInputData = {
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 5,
    expectedReturn: 10,
  }
  
  setData() {
    this.userInputData = {
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      duration: +this.duration(),
      expectedReturn: +this.expectedReturn()
    }
  }

  clearData() {
    this.initialInvestment.set("0");
    this.annualInvestment.set("0");
    this.duration.set("5");
    this.expectedReturn.set("10");
  }

  onSubmit() {
    this.setData();
    this.calculate.emit(this.userInputData);
    this.clearData();
  }
}
