import { Button, Grid, Typography } from "@mui/material";
import { Formik, FormikProps } from "formik";
import { IUserLoginForm, initialUserLoginForm } from "./models";
import { Link, useNavigate } from "react-router-dom";
import TextInputField from "../../TextInputField";
import { connect } from "react-redux";
import { IRootState } from "../../../store";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export interface ILoginProps {}

interface ILoginStateProps {}

interface ILoginDispatchProps {
	dispatch: Dispatch<AnyAction>;
}

const Login: React.FC<ILoginProps & ILoginDispatchProps> = (props) => {
	const navigate = useNavigate();
	const [loginErrorMessage, setLoginErroMessage] = useState<string | null>(
		null
	);

	return (
		<Formik
			initialValues={initialUserLoginForm}
			onSubmit={async (values) => {
				await axios
					.post<string>(
						"/api/LoginUser",
						{
							username: values.username,
							password: values.password,
						},
						{}
					)
					.then((response) => {
						Cookies.set("jwt", response.data);
						navigate("/");
					})
					.catch((error: AxiosError<string>) => {
						console.log("Hi");
						console.log();
						setLoginErroMessage(error.response?.data ?? null);
					});
			}}
		>
			{(formikProps: FormikProps<IUserLoginForm>) => (
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
					rowSpacing={2}
					sx={{ minHeight: "100vh" }}
				>
					<Typography variant="h4" color={"white"}>
						Login
					</Typography>
					{loginErrorMessage && (
						<Typography
							variant="body1"
							color={"red"}
							marginTop="5px"
						>
							{loginErrorMessage}
						</Typography>
					)}
					<Grid item>
						<TextInputField
							name="username"
							type="text"
							label="Username"
						/>
					</Grid>
					<Grid item>
						<TextInputField
							name="password"
							type="password"
							label="Password"
						/>
					</Grid>
					<Grid item>
						<Button
							variant="contained"
							onClick={() => formikProps.handleSubmit()}
						>
							Login
						</Button>
					</Grid>
					<Grid item>
						<Link to="/signup">
							<Button type="button" variant="contained">
								Signup
							</Button>
						</Link>
					</Grid>
				</Grid>
			)}
		</Formik>
	);
};

const mapStateToProps = (state: IRootState): ILoginStateProps => {
	return {};
};

const mapDispatchToProps = (
	dispatch: Dispatch<AnyAction>
): ILoginDispatchProps => {
	return {
		dispatch: dispatch,
	};
};

const reduxConnect = connect<
	ILoginStateProps,
	ILoginDispatchProps,
	ILoginProps,
	IRootState
>(mapStateToProps, mapDispatchToProps);

export default reduxConnect(Login);
