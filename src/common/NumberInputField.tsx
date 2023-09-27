import { TextField } from "@mui/material";
import { getIn, useFormikContext } from "formik";
import styles from "./NumberInputField.module.css";
export interface INumberInputFieldProps {
  name: string;
  className?: string;
}

const NumberInputField: React.FC<INumberInputFieldProps> = (props) => {
  const formik = useFormikContext();
  const value = getIn(formik.values, props.name);

  const onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined = (event) => {
    formik.setFieldValue(props.name, event.target.value);
  };

  return (
    <TextField value={value} onChange={onChange} className={props.className} />
  );
};

export default NumberInputField;
