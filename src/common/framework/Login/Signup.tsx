import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { FormikProps, withFormik } from "formik";
import styles from "./Signup.module.css";
//import axios from "axios";
import TextInputField from "../../TextInputField";
import { IUserSignupForm, initialUserSignupForm } from "./models";

export interface ISignupProps {}

const Signup: React.FC<ISignupProps & FormikProps<IUserSignupForm>> = (
	props
) => {
	return (
		<Grid
			container
			direction="column"
			justifyContent="center"
			alignItems="center"
			rowSpacing={2}
			sx={{ minHeight: "100vh" }}
		>
			<Typography variant="h3">Signup</Typography>
			<Grid item>
				<Grid container direction="row" columnSpacing={2}>
					<Grid item>
						<TextInputField name="firstName" label="First Name" />
					</Grid>
					<Grid item>
						<TextInputField name="lastName" label="Last Name" />
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container direction="row" columnSpacing={2}>
					<Grid item>
						<TextInputField name="username" label="Username" />
					</Grid>
					<Grid item>
						<TextInputField name="email" label="Email" />
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container direction="row" columnSpacing={2}>
					<Grid item>
						<TextInputField
							name="password"
							type="password"
							label="Password"
							required
						/>
					</Grid>
					<Grid item>
						<TextInputField
							name="reTypePassword"
							type="password"
							label="Re-type Password"
							required
						/>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Button
					variant="contained"
					onClick={() => props.handleSubmit()}
				>
					Signup
				</Button>
			</Grid>
		</Grid>
	);
};

const formikConnect = withFormik<ISignupProps, IUserSignupForm>({
	mapPropsToValues: () => {
		return initialUserSignupForm;
	},
	handleSubmit: async (values, formikBag) => {
		/**
		 * TODO: Need to actually call out to function app to receive token.
		 */
		console.log("Attempt...");
		// const response = await axios.post<string>(
		//     "http://localhost:7024/api/CreateUser",
		//     {
		//         firstName: values.firstName,
		//         lastName: values.lastName,
		//         username: values.username,
		//         email: values.email,
		//         password: values.password,
		//     }
		// );
		//console.log(response.data);
		//formikBag.props.setToken("default_token");
	},
	validate(values, props) {
		if (values.password !== values.reTypePassword) {
			return {
				password: "Passwords do not match",
			};
		}
	},
});

export default formikConnect(Signup);
