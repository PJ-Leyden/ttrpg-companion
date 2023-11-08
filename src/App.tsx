import { themeOptions } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import MainPage from "./common/framework/MainPage";

function App() {
    const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
