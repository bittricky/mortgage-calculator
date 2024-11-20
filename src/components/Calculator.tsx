import { useState, useEffect } from "react";

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [downPayment, setDownPayment] = useState(20000);
  const [interestRate, setInterestRate] = useState(3);
  const [loanTerm, setLoanTerm] = useState(25);

  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principle = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthly =
      (principle *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(isNaN(monthly) ? 0 : monthly);
  }, [loanAmount, downPayment, interestRate, loanTerm]);

  return (
    <div className="w-full max-w-4xl bg-dark rounded-2xl p-6 md:p-12 space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">Mortgage Calculator</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {/* TODO: add the range inputs & display card */}
        </div>
      </div>
    </div>
  );
};

Calculator.displayName = "Calculator";

export default Calculator;
