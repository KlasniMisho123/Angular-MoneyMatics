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
  return = 0;

  userInputData = {
  }

  setData() {
    this.userInputData = {
      initialInvestment: this.initialInvestment,
      anualInvestment: this.anualInvestment,
      duration: this.duration,
      return: this.return
    }
  }

  clearData() {
    this.initialInvestment = 0;
    this.anualInvestment = 0;
    this.duration = 0;
    this.return = 0;
    this.userInputData = {}
  }

  onSubmit() {
    this.setData()
    console.log("userInputData: ", this.userInputData)
    this.clearData() 
  }
}
