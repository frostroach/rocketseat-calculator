import React from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import { buttonData } from "./config/buttons";
import { useMath } from "./hooks/Math";
import { BaseButton } from "./models/Button";

const App: React.FC = () => {
  const { handleValueInsert, deleteAllValues, deleteCurrentValue } = useMath();

  const handleButtonPress = (data: BaseButton): void => {
    if (data.operation === "Delete") {
      deleteAllValues();
      return;
    }

    if (data.operation === "Erase") {
      deleteCurrentValue();
      return;
    }

    handleValueInsert(data);
  };

  return (
    <div className="bg-background h-screen items-center justify-center flex">
      <div
        id="calculator-container"
        className="bg-calculatorBackground h-3/4 w-96 rounded-3xl flex items-center justify-center shadow-inner flex-col p-10"
      >
        {/* header da calculadora (valores e resultados) */}

        <Header />

        {/* Buttons */}
        <div className="flex flex-wrap mt-8">
          {buttonData.map((button, index) => (
            <Button
              data={button}
              key={index}
              onPressButton={handleButtonPress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
