import { RouteObject, redirect } from "react-router-dom";
import WarhammerCharacterSheet from "../../warhammer/WarhammerCharacterSheet";
import { IWarhammerCharacteristics } from "../../warhammer/models";
import MainLayout from "./MainLayout";
import Signup from "./Login/Signup";
import Login from "./Login/Login";
import { getTokenCookie } from "./Login/getTokenCookie";

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

export const routes: RouteObject[] = [
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
        loader: async () => {
            const tokenCookie = getTokenCookie();
            if (tokenCookie !== "") {
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
