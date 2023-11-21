import { TextField } from "@mui/material";
import { getIn, useFormikContext } from "formik";

export interface ITextInputFieldProps {
    label?: string;
    name: string;
    className?: string;
    type?: "text" | "password";
}

const TextInputField: React.FC<ITextInputFieldProps> = (props) => {
    const formik = useFormikContext();
    const value = getIn(formik.values, props.name);

    const onChange:
        | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined = (event) => {
        formik.setFieldValue(props.name, event.target.value);
    };

    return (
        <TextField
            suppressContentEditableWarning
            label={props.label}
            type={props.type}
            value={value}
            onChange={onChange}
            className={props.className}
        />
    );
};

export default TextInputField;
