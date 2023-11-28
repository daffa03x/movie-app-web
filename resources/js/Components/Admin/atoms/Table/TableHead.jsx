import React from "react";
import { Thead, Tr } from "@chakra-ui/react";

export default function TableHead({ children }) {
    return (
        <Thead>
            <Tr>{children}</Tr>
        </Thead>
    );
}
