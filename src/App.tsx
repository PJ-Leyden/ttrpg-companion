import styles from "./App.module.css";
import { IWarhammerCharacteristics } from "./warhammer/models";
import { Container, ThemeProvider, createTheme } from "@mui/material";
import WarhammerCharacterSheet from "./warhammer/WarhammerCharacterSheet";
import { themeOptions } from "./theme";
import CoreTable from "./common/CoreTable";
import NumberInputField from "./common/NumberInputField";

function App() {
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

    const theme = createTheme(themeOptions);

    document.body.classList.add(styles.backgroundColor);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container className={styles.CoreContainer}>
                    <WarhammerCharacterSheet sheet={initSheet} />
                    <CoreTable<IWarhammerCharacteristics>
                        headers={[
                            {
                                keyName: "agility",
                                label: "Agility",
                                componentFormat: (data: any) => {
                                    return (
                                        <NumberInputField
                                            name="agility"
                                            className={
                                                styles.characteristicNumberInput
                                            }
                                        />
                                    );
                                },
                            },
                        ]}
                        data={[
                            {
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
                            },
                        ]}
                    />
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
