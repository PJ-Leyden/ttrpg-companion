import { IWarhammerCharacteristics } from "./warhammer/models";
import { themeOptions } from "./theme";
import { ThemeProvider, createTheme } from "@mui/material";
import MainLayout from "./common/framework/MainLayout";

function App() {
    const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <MainLayout coreWebsiteComponent={<></>} />
        </ThemeProvider>
    );
}

export default App;
