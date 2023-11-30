import { Button, Grid, Typography } from "@mui/material";
import { Formik, FormikProps } from "formik";
import axios from "axios";
import TextInputField from "../../TextInputField";
import { IUserSignupForm, initialUserSignupForm } from "./models";
import { useNavigate } from "react-router-dom";

export interface ISignupProps {}

const Signup: React.FC<ISignupProps> = (props) => {
	const navigate = useNavigate();

	return (
		<Formik
			initialValues={initialUserSignupForm}
			onSubmit={async (values) => {
				await axios.post<string>("/api/CreateUser", {
					firstName: values.firstName,
					lastName: values.lastName,
					username: values.username,
					email: values.email,
					password: values.password,
				});
				navigate("/login");
			}}
			validate={(values) => {
				if (values.password !== values.reTypePassword) {
					return {
						password: "Passwords do not match",
					};
				}
			}}
		>
			{(formikProps: FormikProps<IUserSignupForm>) => (
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					rowSpacing={2}
					sx={{ minHeight: "100vh" }}
				>
					<Typography variant="h4" color={"white"}>
						Signup
					</Typography>
					<Grid item>
						<Grid container direction="row" columnSpacing={2}>
							<Grid item>
								<TextInputField
									name="firstName"
									label="First Name"
								/>
							</Grid>
							<Grid item>
								<TextInputField
									name="lastName"
									label="Last Name"
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid item>
						<Grid container direction="row" columnSpacing={2}>
							<Grid item>
								<TextInputField
									name="username"
									label="Username"
								/>
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
							onClick={() => formikProps.handleSubmit()}
						>
							Signup
						</Button>
					</Grid>
				</Grid>
			)}
		</Formik>
	);
};

export default Signup;
