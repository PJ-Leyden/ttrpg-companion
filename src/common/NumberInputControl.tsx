import { TextField } from "@mui/material";
import { InputValue } from "./types";

export interface INumberInputControl {
  label: string;
  value: number | undefined;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  className?: string;
}

const NumberInputControl: React.FC<INumberInputControl> = (props) => {
  return (
    <TextField
      {...props}
      type="number"
      variant="outlined"
      className={props.className}
    />
  );
};

export default NumberInputControl;
