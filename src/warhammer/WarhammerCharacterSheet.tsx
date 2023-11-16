import * as React from "react";
import { FormikProps, withFormik } from "formik";
import { IWarhammerCharacteristics } from "./models";
import { Grid } from "@mui/material";
import NumberInputField from "../common/NumberInputField";
import styles from "./WarhammerCharacterSheet.module.css";
import CoreTable from "../common/CoreTable";
import { Link } from "react-router-dom";

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
                    keyName: "weaponSkill",
                    label: "Weapon Skill",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="weaponSkill"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "ballisticSkill",
                    label: "Ballistic Skill",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="ballisticSkill"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "strength",
                    label: "Strength",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="strength"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "toughness",
                    label: "Toughness",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="toughness"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "initiative",
                    label: "Initiative",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="initiative"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "agility",
                    label: "Agility",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="agility"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "dexterity",
                    label: "Dexterity",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="dexterity"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "intelligence",
                    label: "Intelligence",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="intelligence"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "willpower",
                    label: "Willpower",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="willpower"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "fellowship",
                    label: "Fellowship",
                    componentFormat: (_data: any) => {
                        return (
                            <NumberInputField
                                name="fellowship"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
            ]}
            data={[props.values]}
        />
    );

    return (
<<<<<<< HEAD
        <div className={styles.pageLayout}>
            <Grid className={styles.characterSheetGrid}>
                <Grid item>{table}</Grid>
                <Grid item>
                    <Link to="/hello">Click!</Link>
                </Grid>
            </Grid>
        </div>
=======
        <Grid container justifyContent="center" sx={{ margin: "20px" }}>
            <Grid item>{table}</Grid>
        </Grid>
>>>>>>> dc06b29fd7299ce4ed4e398be75b86608fc83d98
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
