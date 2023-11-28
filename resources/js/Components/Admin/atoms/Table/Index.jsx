import { Table, TableContainer } from "@chakra-ui/react";

export default function TableData({ children }) {
    return (
        <TableContainer className="whitespace-nowrap">
            <Table variant="simple">{children}</Table>
        </TableContainer>
    );
}
