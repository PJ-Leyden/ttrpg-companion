import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

interface IRootProps {}

const Root: React.FC<IRootProps> = (props) => {
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} />;
};

export default Root;
