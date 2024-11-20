import { useState, useEffect } from "react";
import RangeInput from "./RangeInput";

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
          <RangeInput
            label="Loan Amount"
            value={loanAmount}
            onChange={setLoanAmount}
            min={0}
            max={1000000}
            step={1000}
            prefix="$"
          />

          <RangeInput
            label="Down Payment"
            value={downPayment}
            onChange={setDownPayment}
            min={0}
            max={loanAmount}
            step={1000}
            prefix="$"
          />

          <RangeInput
            label="Interest Rate"
            value={interestRate}
            onChange={setInterestRate}
            min={0}
            max={10}
            step={0.1}
            suffix="%"
          />

          <RangeInput
            label="Loan Term"
            value={loanTerm}
            onChange={setLoanTerm}
            min={5}
            max={30}
            step={1}
            suffix=" years"
          />
        </div>

        {/* TODO: add display for output */}
      </div>
    </div>
  );
};

Calculator.displayName = "Calculator";

export default Calculator;
