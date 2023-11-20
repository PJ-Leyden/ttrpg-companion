import { Button, Grid, TextField } from "@mui/material";
import styles from "./Login.module.css";
import { FormikProps, withFormik } from "formik";
import { IUserLogin } from "./models";
import axios from "axios";

export interface ILoginProps {
    setToken: (token: string) => void;
}

const Login: React.FC<ILoginProps & FormikProps<IUserLogin>> = (props) => {
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
            <Grid>
                <Button variant="text">Signup</Button>
            </Grid>
        </Grid>
    );
};

const formikConnect = withFormik<ILoginProps, IUserLogin>({
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
