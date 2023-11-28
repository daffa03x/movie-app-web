import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Spinner, Flex } from "@chakra-ui/react";
import Pagination from "@/Components/Admin/atoms/Pagination/Index";

export default function Cast({ auth, cast, no, total }) {
    const [isLoading, setIsLoading] = useState(true);
    // Simulate loading effect with setTimeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Delay 2 seconds for loading effect
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
            ) : (
                <CardTable HeadCardTitle="Data Cast" HrefCreate="/cast/create">
                    <table className="w-full">
                        <thead>
                            <tr className="[&>th]:p-2 bg-slate-700 text-left">
                                <th>No</th>
                                <th>Cast</th>
                                <th>Occupation</th>
                                <th>Date of Birth</th>
                                <th>Place of Birth</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cast.data.map((c) => (
                                <tr className="[&>td]:p-2" key={c.id}>
                                    <td key={c.id}>{no++}</td>
                                    <td>{c.name_cast}</td>
                                    <td>{c.occupation}</td>
                                    <td>{c.date_of_birth}</td>
                                    <td>{c.place_of_birth}</td>
                                    <td>
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        className="mt-6"
                        total={total}
                        links={cast.links}
                    />
                </CardTable>
            )}
        </AuthenticatedLayout>
    );
}
