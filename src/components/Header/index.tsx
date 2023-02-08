import React from "react";

import EqualSVG from "../../assets/equals.svg";
import { useMath } from "../../hooks/Math";

const Header: React.FC = () => {
  const { firstNumber, operation, secondNumber, result } = useMath();

  return (
    <div id="header" className="flex flex-col w-full">
      <div className="self-end">
        <p className="font-rubik text-valuesColor text-xl">
          {firstNumber.join("")} {operation.text} {secondNumber.join("")}
        </p>
      </div>
      <div className="flex justify-between mt-3">
        <img src={EqualSVG} />
        <p className="text-white font-rubik text-3xl">{result}</p>
      </div>
    </div>
  );
};

export default Header;
