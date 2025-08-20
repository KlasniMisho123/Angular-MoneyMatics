import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { calculateInvestmentResults } from '../investment-results';
import { UserInputData } from './investent-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  userData?: UserInputData;
  calculateResults:any;

  onCalculateInvestmentResults(userInputData:UserInputData) {
    this.calculateResults = (calculateInvestmentResults(userInputData))
  }

  handleFormSubmit(data: UserInputData) {
    this.userData = data;
    console.log("Data received in AppComponent: ", data);
  }
  
}
