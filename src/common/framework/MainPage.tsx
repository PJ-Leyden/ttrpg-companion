import WarhammerCharacterSheet from "../../warhammer/WarhammerCharacterSheet";
import { IWarhammerCharacteristics } from "../../warhammer/models";
import MainLayout from "./MainLayout";

interface IMainPageProps {}

/**
 * Meant for the router.
 */
const MainPage: React.FC<IMainPageProps> = (props) => {
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

    return (
        <MainLayout
            coreWebsiteComponent={<WarhammerCharacterSheet sheet={initSheet} />}
        />
    );
};

export default MainPage;
