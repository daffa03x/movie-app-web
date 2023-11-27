import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Spinner, Flex } from "@chakra-ui/react";
import Toast from "@/Components/Admin/atoms/Toast/Index";

export default function Genre({ auth, genre, no }) {
    const [isLoading, setIsLoading] = useState(true);
    // Simulate loading effect with setTimeout
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Delay 2 seconds for loading effect
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
                <CardTable
                    HeadCardTitle="Data Genre"
                    HrefCreate="/genre/create"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="[&>th]:p-2 bg-slate-700 text-left">
                                <th>No</th>
                                <th width="700">Genre</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {genre.map((g) => (
                                <tr className="[&>td]:p-2" key={g.id}>
                                    <td key={g.id}>{no++}</td>
                                    <td>{g.name_genre}</td>
                                    <td>
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardTable>
            )}
        </AuthenticatedLayout>
    );
}
