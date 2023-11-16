import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WarhammerCharacterSheet from "../../warhammer/WarhammerCharacterSheet";
import { IWarhammerCharacteristics } from "../../warhammer/models";
import MainLayout from "./MainLayout";
import { routes } from "./routes";

interface IMainPageProps {}

/**
 * Meant for the router.
 */
const MainPage: React.FC<IMainPageProps> = (props) => {
    const router = createBrowserRouter(routes);

    return <MainLayout />;
};

export default MainPage;
