import { Button, Grid, TextField } from "@mui/material";
import { FormikProps, withFormik } from "formik";
import styles from "./Signup.module.css";

export interface ISignupProps {}

export interface IUserSignup {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    reTypePassword: string;
}

const Signup: React.FC<ISignupProps & FormikProps<IUserSignup>> = (props) => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            rowSpacing={2}
            sx={{ minHeight: "100vh" }}
        >
            <Grid className={styles.loginText}>Signup</Grid>
            <Grid item>
                <Grid container direction="row" columnSpacing={2}>
                    <Grid item>
                        <TextField label="First Name" />
                    </Grid>
                    <Grid item>
                        <TextField label="Last Name" />
                    </Grid>
                </Grid>
            </Grid>
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
                    Signup
                </Button>
            </Grid>
        </Grid>
    );
};

const formikConnect = withFormik<ISignupProps, IUserSignup>({
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

export default formikConnect(Signup);
