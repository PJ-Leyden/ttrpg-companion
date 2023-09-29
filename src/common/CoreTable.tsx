import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { ReactElement } from "react";

export interface IAllStringKeyProps {
    [key: string]: any;
}

export interface ICoreTableProps<T extends IAllStringKeyProps> {
    headers: ICoreTableHeader[];
    data: T[];
}

export interface ICoreTableHeader {
    label: string;
    name: string;
}

const CoreTable = <T extends IAllStringKeyProps>(props: ICoreTableProps<T>) => {
    function expandItem<T>(item: T): ReactElement[] {
        let cells: ReactElement[] = [];
        let k: keyof typeof item;
        for (k in item) {
            cells.push(<TableCell>{k}</TableCell>);
        }
        return cells;
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {props.headers.map((header) => {
                        return <TableCell>{header.label}</TableCell>;
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map((item) => {
                    return <TableRow>{expandItem(item)}</TableRow>;
                })}
            </TableBody>
        </Table>
    );
};

export default CoreTable;
