import { Button, Grid, TextField } from "@mui/material";
import styles from "./Login.module.css";
import { FormikProps, withFormik } from "formik";
import { IUserLogin } from "./models";

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
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
};

const formikConnect = withFormik<ILoginProps, IUserLogin>({
    handleSubmit: (values, formikBag) => {
        /**
         * TODO: Need to actually call out to function app to receive token.
         */
        formikBag.props.setToken("default_token");
    },
});

export default formikConnect(Login);
