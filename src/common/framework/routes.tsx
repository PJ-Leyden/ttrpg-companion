import { RouteObject } from "react-router-dom";
import WarhammerCharacterSheet from "../../warhammer/WarhammerCharacterSheet";
import { IWarhammerCharacteristics } from "../../warhammer/models";

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
};

export const routes: RouteObject[] = [
    {
        path: "/warhammer",
        element: <WarhammerCharacterSheet sheet={initSheet} />,
    },
    {
        path: "/",
        element: <></>,
    },
];
