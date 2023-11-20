import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

interface IMainPageProps {}

const Root: React.FC<IMainPageProps> = (props) => {
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};

export default Root;
