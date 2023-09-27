import * as React from "react";
import { FormikProps, withFormik } from "formik";
import { IWarhammerCharacteristics } from "./models";
import {
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

export interface IWarhammerCharacterSheetProps {
    sheet: IWarhammerCharacteristics;
}

const WarhammerCharacterSheet: React.FC<
    IWarhammerCharacterSheetProps & FormikProps<IWarhammerCharacteristics>
> = (props) => {
    return (
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
        </Grid>
    );
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
