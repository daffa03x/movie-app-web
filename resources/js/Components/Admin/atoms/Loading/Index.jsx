import React from "react";
import { Spinner, Flex } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Flex
            height="100vh" // Tinggi sesuai kebutuhan
            width="100vw" // Lebar sesuai kebutuhan
            justify="center" // Mengatur posisi horizontal ke tengah
            align="center" // Mengatur posisi vertikal ke tengah
        >
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Flex>
    );
}
