import { BaseButton } from "../models/Button";

import PercentSVG from "../assets/percent.svg";
import DivisionSVG from "../assets/division.svg";
import EqualsSVG from "../assets/equals.svg";
import MinusSVG from "../assets/minus.svg";
import PlusSVG from "../assets/plus.svg";
import XSVG from "../assets/x.svg";
import PlusMinusSVG from "../assets/plus-minus.svg";

export const buttonData: BaseButton[] = [
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "CE",
    textColor: "text-purpleText",
    type: "text",
    operation: "Delete",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "C",
    textColor: "text-white",
    type: "text",
    operation: "Erase",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    icon: PercentSVG,
    type: "icon",
    text: "%",
    operation: "Percent",
  },
  {
    background: "bg-darkPurpleButton",
    shadow: "shadow-darkPurpleButton",
    icon: DivisionSVG,
    type: "icon",
    operation: "Divide",
    text: "/",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "7",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "8",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "9",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-darkPurpleButton",
    shadow: "shadow-darkPurpleButton",
    icon: XSVG,
    type: "icon",
    operation: "Multiply",
    text: "x",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "4",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "5",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "6",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-darkPurpleButton",
    shadow: "shadow-darkPurpleButton",
    icon: MinusSVG,
    type: "icon",
    operation: "Minus",
    text: "-",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "1",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "2",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "3",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-darkPurpleButton",
    shadow: "shadow-darkPurpleButton",
    icon: PlusSVG,
    type: "icon",
    operation: "Plus",
    text: "+",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    icon: PlusMinusSVG,
    type: "icon",
    operation: "Plus",
    text: "+",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: "0",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-defaultButton",
    shadow: "shadow-defaultButton",
    text: ",",
    textColor: "text-white",
    type: "text",
  },
  {
    background: "bg-lightPurpleButton",
    shadow: "shadow-lightPurpleButton",
    icon: EqualsSVG,
    type: "icon",
    operation: "Equal",
  },
];
