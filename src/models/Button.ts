export type BaseButton = {
  type: "icon" | "text";
  background:
    | "bg-defaultButton"
    | "bg-lightPurpleButton"
    | "bg-darkPurpleButton";
  icon?: SVGElement;
  text?: string;
  operation?: "Divide" | "Multiply" | "Percent" | "Minus" | "Plus" | "Equal";
  shadow:
    | "shadow-defaultButton"
    | "shadow-darkPurpleButton"
    | "shadow-lightPurpleButton";
  textColor: "text-white" | "text-purpleText";
};
