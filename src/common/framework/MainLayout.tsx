import { ReactElement } from "react";
import styles from "./MainLayout.module.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import TestComponent from "./TestComponent";

interface IMainLayoutProps {
    coreWebsiteComponent?: ReactElement;
}

const MainLayout: React.FC<IMainLayoutProps> = (props) => {
    const [drawerOpen2, setDrawerOpen2] = useState<boolean>(false);

    const router = createBrowserRouter(routes);

    return (
        <div id="main-container" className={styles.top}>
            <div id="application-bar" className={styles.appBar}>
                <button
                    id="test-menu-button"
                    onClick={() => setDrawerOpen2(!drawerOpen2)}
                >
                    Close
                </button>
            </div>
            <div id="content-container" className={styles.flexBoi}>
                <div
                    id="left-nav-container"
                    className={`${styles.test} ${
                        drawerOpen2 ? styles.testEnd : styles.testStart
                    }`}
                />
                <div id="page-container" className={styles.pageContainer}>
                    {/* {props.coreWebsiteComponent} */}
                    <TestComponent />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
