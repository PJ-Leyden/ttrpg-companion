import { IWarhammerCharacteristics } from "./warhammer/models";
import { themeOptions } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import MainLayout from "./common/framework/MainLayout";
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
