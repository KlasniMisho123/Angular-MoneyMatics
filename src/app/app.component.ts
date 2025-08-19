import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputData } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  userData?: UserInputData;

  handleFormSubmit(data: UserInputData) {
    this.userData = data;
    console.log("Data received in AppComponent: ", data);
  }
  
}
