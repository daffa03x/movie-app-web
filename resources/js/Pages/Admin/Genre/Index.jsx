import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import Pagination from "@/Components/Admin/atoms/Pagination/Index";
import Loading from "@/Components/Admin/atoms/Loading/Index";
import CardNull from "@/Components/Admin/atoms/CardNull/Index";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import TableData from "@/Components/Admin/atoms/Table/Index";
import TableHead from "@/Components/Admin/atoms/Table/TableHead";
import { Th, Td, Tr, TableCaption } from "@chakra-ui/react";
import TableBody from "@/Components/Admin/atoms/Table/TableBody";

export default function Genre({ auth, genre, no, total }) {
    const [isLoading, setIsLoading] = useState(true);
    // Simulate loading effect with setTimeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500); // Delay 2 seconds for loading effect
    }, []);
    Toast();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Genre
                </h2>
            }
        >
            <Head title="Genre" />
            {isLoading ? (
                <Loading />
            ) : genre.data.length === 0 ? (
                <CardNull title="Genre" href="/genre/create" />
            ) : (
                <CardTable
                    HeadCardTitle="Data Genre"
                    HrefCreate="/genre/create"
                >
                    <TableData>
                        <TableCaption>
                            <Pagination total={total} links={genre.links} />
                        </TableCaption>
                        <TableHead>
                            <Th>No</Th>
                            <Th>Genre</Th>
                            <Th>Action</Th>
                        </TableHead>
                        <TableBody>
                            {genre.data.map((g) => (
                                <Tr key={g.id}>
                                    <Td>{no++}</Td>
                                    <Td>{g.name_genre}</Td>
                                    <Td>
                                        <EditButton
                                            href={`/genre/edit/${g.id}`}
                                            className=""
                                        >
                                            <IconEdit />
                                        </EditButton>
                                        <DeleteButton
                                            id={g.id}
                                            menu="genre"
                                            className="ml-4"
                                        >
                                            <IconDelete />
                                        </DeleteButton>
                                    </Td>
                                </Tr>
                            ))}
                        </TableBody>
                    </TableData>
                </CardTable>
            )}
        </AuthenticatedLayout>
    );
}
