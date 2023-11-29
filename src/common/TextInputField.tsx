import { SxProps, TextField, Theme } from "@mui/material";
import { useField } from "formik";

export interface ITextInputFieldProps {
	name: string;
	label?: string;
	validate?: (value: any) => undefined | string | Promise<any>;
	type?: "text" | "password";
	required?: boolean;
	sx?: SxProps<Theme>;
	className?: string;
}

const TextInputField: React.FC<ITextInputFieldProps> = (props) => {
	const [field, meta] = useField(props);
	const { required, label, type, className, sx } = props;

	return (
		<TextField
			{...field}
			label={label}
			type={type}
			className={className}
			sx={sx}
			error={meta.error !== undefined}
			helperText={meta.error}
			required={required}
		/>
	);
};

export default TextInputField;
