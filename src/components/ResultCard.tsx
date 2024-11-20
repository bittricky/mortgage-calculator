import { formatCurrency } from "../utils/formatters";

interface ResultCardProps {
  monthlyPayment: number;
  loanAmount: number;
  downPayment: number;
  totalInterest: number;
}

const ResultCard = ({
  monthlyPayment,
  loanAmount,
  downPayment,
  totalInterest,
}: ResultCardProps) => {
  const amounts = [
    {
      text: "Principal Amount",
      output: formatCurrency(loanAmount - downPayment),
    },
    { text: "Down Payment", output: formatCurrency(downPayment) },
    { text: "Total Interest", output: formatCurrency(totalInterest) },
    {
      text: "Total Amount",
      output: formatCurrency(loanAmount + totalInterest),
    },
  ];
  return (
    <div className="bg-darker rounded-2xl p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Monthly Payment</h2>
        <p className="text-4xl font-bold text-primary">
          {formatCurrency(monthlyPayment)}
        </p>
      </div>

      <div className="space-y-4">
        {amounts.map((item, index) => (
          <div
            className={`flex justify-between ${
              index === amounts.length - 1 ? "pt-4 border-t border-dark" : ""
            }`}
            key={index}
          >
            <span className="text-light-gray">{item.text}</span>
            <span className="font-bold">{item.output}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ResultCard.displayName = "ResultCard";

export default ResultCard;
