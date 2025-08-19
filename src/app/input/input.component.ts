import { Component } from '@angular/core';
import { FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  initialInvestment = 0;
  anualInvestment = 0;
  duration = 0;
  expectedReturn = 0;

  userInputData = {
  }

  setData() {
    this.userInputData = {
      initialInvestment: this.initialInvestment,
      anualInvestment: this.anualInvestment,
      duration: this.duration,
      expectedReturn: this.expectedReturn
    }
  }

  clearData() {
    this.initialInvestment = 0;
    this.anualInvestment = 0;
    this.duration = 0;
    this.expectedReturn = 0;
    this.userInputData = {}
  }

  onSubmit() {
    this.setData()
    console.log("userInputData: ", this.userInputData)
    this.clearData() 
  }
}
