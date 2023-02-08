import { BaseButton } from "../models/Button";

type AccountProps = {
  operation: BaseButton;
  firstValue: number;
  secondValue: number;
};

export const handleCalculusData = ({
  firstValue,
  operation,
  secondValue,
}: AccountProps): number => {
  let valueToReturn: number = 0;

  switch (operation.operation) {
    case "Divide":
      valueToReturn = firstValue / secondValue;

      break;

    case "Minus":
      valueToReturn = firstValue - secondValue;

      break;

    case "Plus":
      valueToReturn = firstValue + secondValue;
      break;

    case "Multiply":
      valueToReturn = firstValue * secondValue;
      break;

    case "Percent":
      valueToReturn = (secondValue * firstValue) / 100;
      break;

    default:
      break;
  }

  return valueToReturn;
};
