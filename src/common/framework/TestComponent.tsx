import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes";

export interface ITestComponentProps {}

const TestComponent: React.FC<ITestComponentProps> = (props) => {
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default TestComponent;
