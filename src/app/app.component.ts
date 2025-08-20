import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { calculateInvestmentResults } from '../investment-results';
import type { UserInputData } from './investent-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, InputComponent, InvestmentResultsComponent],
})

export class AppComponent {
  calculateResults = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[] | undefined>(undefined);

  onCalculateInvestmentResults(userInputData:UserInputData) {
    this.calculateResults.set(calculateInvestmentResults(userInputData))
  }
  
}
