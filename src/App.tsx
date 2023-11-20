import { themeOptions } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import Root from "./common/framework/Root";

function App() {
    const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    );
}

export default App;
