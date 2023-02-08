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
  firstNumber: string[];
  operation: BaseButton;
  secondNumber: string[];
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
  const [firstNumber, setFirstNumber] = useState<string[]>([]);
  const [operation, setOperation] = useState<BaseButton>({} as BaseButton);
  const [secondNumber, setSecondNumber] = useState<string[]>([]);
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

  const fetchFirstNumber = (value: string): void => {
    setFirstNumber([...firstNumber, value]);
  };

  const fetchSecondNumber = (value: string): void => {
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

  const convertNumberintoArray = (value: number): string[] =>
    String(value)
      .split("")
      .map((number) => number);

  const addNewValue = (value: BaseButton): void => {
    //se apertar operação, deve-se mandar para o firstNumber o campo de result, e setar uma nova operação.
    const convertValue = convertNumberintoArray(result);
    console.log(convertValue);
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
      return;
    }

    if (result !== 0) {
      addNewValue(value);
      return;
    }

    if (value.operation) return;

    if (Object.values(operation).length < 1) {
      if (value.text) {
        fetchFirstNumber(value.text);
        return;
      }
    }

    if (value.text) {
      fetchSecondNumber(value.text);
    }
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
