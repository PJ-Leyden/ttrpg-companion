import { SxProps, TextField, Theme } from "@mui/material";
import { useField } from "formik";

export interface INumberInputFieldProps {
    name: string;
    label?: string;
    validate?: (value: any) => undefined | string | Promise<any>;
    className?: string;
    type?: "text" | "password";
    sx?: SxProps<Theme>;
}

const NumberInputField: React.FC<INumberInputFieldProps> = (props) => {
    const [field, , helpers] = useField(props);

    const onChange:
        | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined = (event) => {
        helpers.setValue(event.target.value);
        field.onChange(event);
    };

    return (
        <TextField
            label={props.label}
            type={"number"}
            value={field.value}
            onChange={onChange}
            className={props.className}
            sx={props.sx}
        />
    );
};

export default NumberInputField;
