import React from "react";
import { BaseButton } from "../../models/Button";
import "./index.css";

type ButtonProps = {
  data: BaseButton;
  onPressButton: (button: BaseButton) => void;
};

const Button: React.FC<ButtonProps> = ({ data, onPressButton }) => {
  return (
    <button
      className={`${data.background} ${data.shadow} flex button w-16 h-16 items-center justify-center mr-3 mb-3`}
      onClick={() => onPressButton(data)}
    >
      {data.type === "text" && (
        <p className={`${data.textColor} font-rubik `}>{data.text}</p>
      )}
      {data.icon && <img src={data.icon} />}
    </button>
  );
};

export default Button;
