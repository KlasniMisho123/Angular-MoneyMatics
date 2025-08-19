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
    console.log("userInputData: ", this.userInputData)
  }

  onSubmit() {
    // console.log("submited")
  }
}
