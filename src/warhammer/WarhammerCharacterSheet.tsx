import * as React from "react";
import { FormikProps, withFormik } from "formik";
import { IWarhammerCharacteristics } from "./models";
import {
    Container,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import NumberInputField from "../common/NumberInputField";
import styles from "./WarhammerCharacterSheet.module.css";
import CoreTable from "../common/CoreTable";

export interface IWarhammerCharacterSheetProps {
    sheet: IWarhammerCharacteristics;
}

const WarhammerCharacterSheet: React.FC<
    IWarhammerCharacterSheetProps & FormikProps<IWarhammerCharacteristics>
> = (props) => {
    const table = (
        <CoreTable<IWarhammerCharacteristics>
            headers={[
                {
                    keyName: "agility",
                    label: "Agility",
                    componentFormat: (data: any) => {
                        return (
                            <NumberInputField
                                name="agility"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
            ]}
            data={[props.values]}
        />
    );

    const grid = (
        <Grid container spacing={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Weapon Skill</TableCell>
                            <TableCell>Ballistic Skill</TableCell>
                            <TableCell>Strength</TableCell>
                            <TableCell>Toughness</TableCell>
                            <TableCell>Initiative</TableCell>
                            <TableCell>Agility</TableCell>
                            <TableCell>Dexterity</TableCell>
                            <TableCell>Intelligence</TableCell>
                            <TableCell>Willpower</TableCell>
                            <TableCell>Fellowship</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <NumberInputField
                                    name="weaponSkill"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="ballisticSkill"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="strength"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="toughness"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="ballisticSkill"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="agility"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="dexterity"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="intelligence"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="willpower"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                            <TableCell>
                                <NumberInputField
                                    name="fellowship"
                                    className={styles.characteristicNumberInput}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <CoreTable<IWarhammerCharacteristics>
                headers={[
                    {
                        keyName: "agility",
                        label: "Agility",
                        componentFormat: (data: any) => {
                            return (
                                <NumberInputField
                                    name="agility"
                                    className={styles.characteristicNumberInput}
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
        </Grid>
    );

    return <Grid>{table}</Grid>;
};

const formikConnect = withFormik<
    IWarhammerCharacterSheetProps,
    IWarhammerCharacteristics
>({
    handleSubmit: () => {},
    mapPropsToValues: (props) => {
        return { ...props.sheet };
    },
});

export default formikConnect(WarhammerCharacterSheet);
