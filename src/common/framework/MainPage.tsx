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

    return <MainLayout />;
};

export default MainPage;
