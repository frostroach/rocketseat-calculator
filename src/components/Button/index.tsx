import React from "react";
import { BaseButton } from "../../models/Button";
import "./index.css";

type ButtonProps = {
  data: BaseButton;
};

const Button: React.FC<ButtonProps> = ({ data }) => {
  const test = `lightPurpleButton`;
  return (
    <button
      className={`bg-${test} ${data.shadow} flex button w-16 h-16 items-center justify-center mr-3 mb-3`}
    >
      {data.text && (
        <p className={`${data.textColor} font-rubik `}>{data.text}</p>
      )}
      {data.icon && <img src={data.icon} />}
    </button>
  );
};

export default Button;
