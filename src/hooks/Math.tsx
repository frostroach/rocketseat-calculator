import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { BaseButton } from "../models/Button";
import { handleCalculusData } from "../utils/accountCases";

type MathProps = {
  firstNumber: number[];
  operation: BaseButton;
  secondNumber: number[];
  result: number;
  handleValueInsert: (value: BaseButton) => void;
  handleCalculus: () => void;
  deleteAllValues: () => void;
  deleteCurrentValue: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

const MathContext = createContext<MathProps>({} as MathProps);

export const MathProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [firstNumber, setFirstNumber] = useState<number[]>([]);
  const [operation, setOperation] = useState<BaseButton>({} as BaseButton);
  const [secondNumber, setSecondNumber] = useState<number[]>([]);
  const [result, setResult] = useState<number>(0);

  const deleteAllValues = (): void => {
    setFirstNumber([]);
    setOperation({} as BaseButton);
    setResult(0);
    setSecondNumber([]);
  };

  const deleteCurrentValue = (): void => {
    if (Object.values(operation).length > 1) {
      setSecondNumber([]);
    } else {
      setFirstNumber([]);
    }
  };

  const fetchFirstNumber = (value: number): void => {
    setFirstNumber([...firstNumber, value]);
  };

  const fetchSecondNumber = (value: number): void => {
    setSecondNumber([...secondNumber, value]);
  };

  const handleCalculus = (): void => {
    const resultData = handleCalculusData({
      firstValue: Number(firstNumber.join("")),
      operation: operation,
      secondValue: Number(secondNumber.join("")),
    });
    setResult(resultData);
  };

  const convertNumberintoArray = (value: number): number[] =>
    String(value)
      .split("")
      .map((number) => Number(number));

  const addNewValue = (value: BaseButton): void => {
    //se apertar operação, deve-se mandar para o firstNumber o campo de result, e setar uma nova operação.
    const convertValue = convertNumberintoArray(result);
    setFirstNumber(convertValue);
    setOperation(value);
    setResult(0);
    setSecondNumber([]);
  };

  const handleValueInsert = (value: BaseButton): void => {
    if (
      value.operation &&
      firstNumber.length > 0 &&
      Object.values(operation).length < 1
    ) {
      setOperation(value);
      return;
    }

    if (value.operation === "Equal") {
      handleCalculus();
    }

    if (result !== 0) {
      addNewValue(value);
    }

    if (value.operation) return;

    if (Object.values(operation).length < 1) {
      fetchFirstNumber(Number(value.text));
      return;
    }

    fetchSecondNumber(Number(value.text));
  };

  return (
    <MathContext.Provider
      value={{
        firstNumber,
        operation,
        secondNumber,
        result,
        handleValueInsert,
        handleCalculus,
        deleteAllValues,
        deleteCurrentValue,
      }}
    >
      {children}
    </MathContext.Provider>
  );
};

export function useMath(): MathProps {
  const context = useContext(MathContext);

  return context;
}
