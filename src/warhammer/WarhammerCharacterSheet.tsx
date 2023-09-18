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
              <TableCell>{props.values.weaponSkill}</TableCell>
              <TableCell>{props.values.ballisticSkill}</TableCell>
              <TableCell>{props.values.strength}</TableCell>
              <TableCell>{props.values.toughness}</TableCell>
              <TableCell>{props.values.initiative}</TableCell>
              <TableCell>{props.values.agility}</TableCell>
              <TableCell>{props.values.dexterity}</TableCell>
              <TableCell>{props.values.intelligence}</TableCell>
              <TableCell>{props.values.willpower}</TableCell>
              <TableCell>{props.values.fellowship}</TableCell>
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
