import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import { ReactElement, useCallback, useMemo } from "react";

export interface IAllStringKeyProps {
    [key: string]: any;
}

export interface ICoreTableProps<T extends IAllStringKeyProps> {
    headers: ICoreTableHeader<T>[];
    data: T[];
}

export interface ICoreTableHeader<T extends IAllStringKeyProps> {
    /**
     * The name of the field in the table data object that this column represents.
     */
    keyName: Extract<keyof T, string>;

    /**
     * Text to put in the header row.
     */
    label: string;

    componentFormat?: (data: any) => ReactElement;
}

const CoreTable = <T extends IAllStringKeyProps>(props: ICoreTableProps<T>) => {
    const tableHeaders = useMemo(() => {
        return props.headers.map((header) => {
            return <TableCell>{header.label}</TableCell>;
        });
    }, [props.headers]);

    const buildDataCell = useCallback(
        (columnHeader: ICoreTableHeader<T>, data: any) => {
            if (columnHeader.componentFormat) {
                return columnHeader.componentFormat(data);
            }
            return <TableCell>{data}</TableCell>;
        },
        []
    );

    const tableRows = useMemo(() => {
        return props.data.map((rowItem) => {
            return (
                <TableRow>
                    {props.headers.map((columnHeader, _index) => {
                        return buildDataCell(
                            columnHeader,
                            rowItem[columnHeader.keyName]
                        );
                    })}
                </TableRow>
            );
        });
    }, [buildDataCell, props.data, props.headers]);

    return (
        <Table>
            <TableHead>
                <TableRow>{tableHeaders}</TableRow>
            </TableHead>
            <TableBody>{tableRows}</TableBody>
        </Table>
    );
};

export default CoreTable;
