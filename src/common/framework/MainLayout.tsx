import { ReactElement, useState } from "react";
import styles from "./MainLayout.module.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import TestComponent from "./TestComponent";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface IMainLayoutProps {
    coreWebsiteComponent?: ReactElement;
}

const MainLayout: React.FC<IMainLayoutProps> = (props) => {
    const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);

    const router = createBrowserRouter(routes);

    return (
        <div id="main-container" className={styles.top}>
            <div id="application-bar" className={styles.appBar}>
                <Grid container alignContent="center" sx={{ height: "100%" }}>
                    <Grid item sx={{ marginLeft: "10px", marginBottom: "2px" }}>
                        <button
                            id="test-menu-button"
                            onClick={() => setLeftNavOpen(!leftNavOpen)}
                        >
                            <MenuIcon />
                        </button>
                    </Grid>
                </Grid>
            </div>
            <div id="content-container" className={styles.flexBoi}>
                <div
                    id="left-nav-container"
                    className={`${styles.test} ${
                        leftNavOpen ? styles.testEnd : styles.testStart
                    }`}
                />
                <div id="page-container" className={styles.pageContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
