export type BaseButton = {
  type: "icon" | "text";
  background:
    | "bg-defaultButton"
    | "bg-lightPurpleButton"
    | "bg-darkPurpleButton";
  icon?: string;
  text?: string;
  operation?:
    | "Divide"
    | "Multiply"
    | "Percent"
    | "Minus"
    | "Plus"
    | "Equal"
    | "Erase"
    | "Delete";
  shadow:
    | "shadow-defaultButton"
    | "shadow-darkPurpleButton"
    | "shadow-lightPurpleButton";
  textColor?: "text-white" | "text-purpleText";
};
