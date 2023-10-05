import * as React from "react";
import { FormikProps, withFormik } from "formik";
import { IWarhammerCharacteristics } from "./models";
import {
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField,
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
                {
                    keyName: "ballisticSkill",
                    label: "Ballistic Skill",
                    componentFormat: (data: any) => {
                        return (
                            <NumberInputField
                                name="ballisticSkill"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
                {
                    keyName: "weaponSkill",
                    label: "Weapon Skill",
                    componentFormat: (data: any) => {
                        return (
                            <NumberInputField
                                name="weaponSkill"
                                className={styles.characteristicNumberInput}
                            />
                        );
                    },
                },
            ]}
            data={[
                props.values,
                props.values,
                props.values,
                props.values,
                props.values,
            ]}
        />
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={2} />
            <Grid item xs={8}>
                {table}
            </Grid>
            <Grid item xs={2} />
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
