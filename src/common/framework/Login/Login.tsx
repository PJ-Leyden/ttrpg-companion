import { Button, Grid, TextField } from "@mui/material";
import styles from "./Login.module.css";
import { FormikProps, withFormik } from "formik";
import { IUserLoginForm } from "./models";
import { Link } from "react-router-dom";
//import axios from "axios";

export interface ILoginProps {}

const Login: React.FC<ILoginProps & FormikProps<IUserLoginForm>> = (props) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            sx={{ minHeight: "100vh" }}
        >
            <Grid className={styles.loginText}>Login</Grid>
            <Grid item>
                <TextField type="text" label="Username" />
            </Grid>
            <Grid item>
                <TextField type="password" label="Password" />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    onClick={() => props.handleSubmit()}
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
    );
};

const formikConnect = withFormik<ILoginProps, IUserLoginForm>({
    handleSubmit: async (values, formikBag) => {
        /**
         * TODO: Need to actually call out to function app to receive token.
         */
        // console.log("Attempt...");
        // const response = await axios.post<string>(
        //     "http://localhost:7024/api/CreateUser",
        //     {
        //         firstName: "PJ",
        //         lastName: "Leyden",
        //         username: "HelicalMists",
        //         email: "pjleyden1@gmail.com",
        //         password: "Test1234",
        //     }
        // );
        // console.log(response.data);
        //formikBag.props.setToken("default_token");
    },
});

export default formikConnect(Login);
