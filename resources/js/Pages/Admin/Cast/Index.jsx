import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Pagination from "@/Components/Admin/atoms/Pagination/Index";
import TableData from "@/Components/Admin/atoms/Table/Index";
import TableHead from "@/Components/Admin/atoms/Table/TableHead";
import { Th, Td, Tr, TableCaption } from "@chakra-ui/react";
import TableBody from "@/Components/Admin/atoms/Table/TableBody";
import Loading from "@/Components/Admin/atoms/Loading/Index";
import CardNull from "@/Components/Admin/atoms/CardNull/Index";

export default function Cast({ auth, cast, no, total }) {
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
                    Cast
                </h2>
            }
        >
            <Head title="Cast" />
            {isLoading ? (
                <Loading />
            ) : cast.data.length === 0 ? (
                <CardNull title="Cast" href="/cast/create" />
            ) : (
                <CardTable HeadCardTitle="Data Cast" HrefCreate="/cast/create">
                    <TableData>
                        <TableCaption>
                            <Pagination total={total} links={cast.links} />
                        </TableCaption>
                        <TableHead>
                            <Th>No</Th>
                            <Th>Cast</Th>
                            <Th>Occupation</Th>
                            <Th>Date Of Birth</Th>
                            <Th>Place Of Birth</Th>
                            <Th>Action</Th>
                        </TableHead>
                        <TableBody>
                            {cast.data.map((c) => (
                                <Tr key={c.id}>
                                    <Td>{no++}</Td>
                                    <Td>{c.name_cast}</Td>
                                    <Td>{c.occupation}</Td>
                                    <Td>{c.date_of_birth}</Td>
                                    <Td>{c.place_of_birth}</Td>
                                    <Td>
                                        <EditButton
                                            href={`/cast/edit/${c.id}`}
                                            className=""
                                        >
                                            <IconEdit />
                                        </EditButton>
                                        <DeleteButton
                                            id={c.id}
                                            menu="cast"
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
