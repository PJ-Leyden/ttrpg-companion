import {
	RouteObject,
	RouterProvider,
	createBrowserRouter,
	redirect,
} from "react-router-dom";
import WarhammerCharacterSheet from "../../warhammer/WarhammerCharacterSheet";
import { IWarhammerCharacteristics } from "../../warhammer/models";
import MainLayout from "./MainLayout";
import Signup from "./Login/Signup";
import Login from "./Login/Login";
import Cookies from "js-cookie";

const initSheet: IWarhammerCharacteristics = {
	weaponSkill: 80,
	ballisticSkill: 75,
	strength: 60,
	toughness: 65,
	agility: 45,
	dexterity: 70,
	initiative: 90,
	intelligence: 40,
	willpower: 20,
	fellowship: 70,
	test: "",
};

const Router: React.FC<{}> = (props) => {
	const routes: RouteObject[] = [
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/",
			element: <MainLayout />,
			loader: () => {
				const jwt = Cookies.get("jwt");
				if (!jwt || jwt === "") {
					return redirect("/login");
				}
				return null;
			},
			children: [
				{
					path: "warhammer",
					element: <WarhammerCharacterSheet sheet={initSheet} />,
				},
			],
		},
	];

	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

export default Router;
