import React from "react";

import EqualSVG from "./assets/equals.svg";
import Button from "./components/Button";
import { buttonData } from "./config/buttons";

const App: React.FC = () => (
  <div className="bg-background h-screen items-center justify-center flex">
    <div
      id="calculator-container"
      className="bg-calculatorBackground h-3/4 w-96 rounded-3xl flex items-center justify-center shadow-inner flex-col p-10"
    >
      {/* header da calculadora (valores e resultados) */}

      <div id="header" className="flex flex-col w-full">
        <div className="self-end">
          <p className="font-rubik text-valuesColor text-xl">1 + 1</p>
        </div>
        <div className="flex justify-between mt-3">
          <img src={EqualSVG} />
          <p className="text-white font-rubik text-3xl">2</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap mt-8">
        {buttonData.map((button) => (
          <Button data={button} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
