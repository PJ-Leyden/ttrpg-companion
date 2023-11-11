import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import { routes } from "./routes";
import { useCallback, useEffect, useState } from "react";
import Login from "./Login/Login";
import { CircularProgress } from "@mui/material";

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = (props) => {
    const router = createBrowserRouter(routes);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(";");
        let tokenCookie = "";
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === " ") {
                c = c.substring(1);
            }
            if (c.indexOf("token=") === 0) {
                tokenCookie = c.substring("token=".length, c.length);
            }
        }
        if (tokenCookie !== "") {
            setToken(tokenCookie);
        }
        setLoading(false);
    }, []);

    const assignToken = useCallback((token: string) => {
        document.cookie = `token=${token}`;
        setToken(token);
    }, []);

    const getComponent = useCallback(() => {
        if (loading) {
            return <CircularProgress />;
        }

        if (!token) {
            return <Login setToken={assignToken} />;
        }

        return (
            <MainLayout
                coreWebsiteComponent={<RouterProvider router={router} />}
            />
        );
    }, [assignToken, loading, router, token]);

    return <>{getComponent()}</>;
};

export default MainPage;
