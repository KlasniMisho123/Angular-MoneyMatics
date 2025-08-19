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
  
  setData() {
    console.log("initialInvestment: ", this.initialInvestment)
  }

  onSubmit() {
    // console.log("submited")
  }
}
