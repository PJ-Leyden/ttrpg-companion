import MainLayout from "./MainLayout";

interface IMainPageProps {}

/**
 * Meant for the router.
 */
const MainPage: React.FC<IMainPageProps> = (props) => {
    return <MainLayout coreWebsiteComponent={<></>} />;
};

export default MainPage;
