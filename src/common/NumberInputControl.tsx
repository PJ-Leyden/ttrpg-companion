import { TextField } from "@mui/material";
import { InputValue } from "./types";

export interface INumberInputControl {
  label: string;
  value: number | undefined;
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

const NumberInputControl: React.FC<INumberInputControl> = (props) => {
  return <TextField {...props} type="number" variant="outlined" />;
};

export default NumberInputControl;
