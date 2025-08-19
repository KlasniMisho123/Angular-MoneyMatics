// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it

export interface UserInputData {
  initialInvestment:number,
  annualInvestment:number,
  duration:number,
  expectedReturn:number
}

export function calculateInvestmentResults(userInputData:UserInputData) {
  const annualData = [];
  let investmentValue = userInputData.initialInvestment;

  for (let i = 0; i < userInputData.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (userInputData.expectedReturn / 100);
    investmentValue += interestEarnedInYear + userInputData.annualInvestment;
    const totalInterest =
      investmentValue - userInputData.annualInvestment * year - userInputData.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: userInputData.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: userInputData.initialInvestment + userInputData.annualInvestment * year,
    });
  }

  return annualData;
}
