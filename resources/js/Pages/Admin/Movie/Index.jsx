import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Badge } from "@chakra-ui/react";
import Pagination from "@/Components/Admin/atoms/Pagination/Index";
import TableData from "@/Components/Admin/atoms/Table/Index";
import TableHead from "@/Components/Admin/atoms/Table/TableHead";
import { Th, Td, Tr, TableCaption } from "@chakra-ui/react";
import TableBody from "@/Components/Admin/atoms/Table/TableBody";
import Loading from "@/Components/Admin/atoms/Loading/Index";
import CardNull from "@/Components/Admin/atoms/CardNull/Index";

export default function Movie({ auth, movie, no, total }) {
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
                    Movie
                </h2>
            }
        >
            <Head title="Movie" />
            {isLoading ? (
                <Loading />
            ) : movie.data.length === 0 ? (
                <CardNull title="Movie" href="/movie/create" />
            ) : (
                <CardTable
                    HeadCardTitle="Data Movie"
                    HrefCreate="/movie/create"
                >
                    <TableData>
                        <TableCaption>
                            <Pagination total={total} links={movie.links} />
                        </TableCaption>
                        <TableHead>
                            <Th>No</Th>
                            <Th>Movie</Th>
                            <Th>Genre</Th>
                            <Th>Cast</Th>
                            <Th>Release Date</Th>
                            <Th>Rating</Th>
                            <Th>Action</Th>
                        </TableHead>
                        <TableBody>
                            {movie.data.map((m) => (
                                <Tr key={m.id}>
                                    <Td>{no++}</Td>
                                    <Td>{m.name}</Td>
                                    <Td>
                                        {m.genres.map((mg) => (
                                            <Badge
                                                marginEnd={3}
                                                rounded={5}
                                                colorScheme="purple"
                                            >
                                                {mg.name_genre}
                                            </Badge>
                                        ))}
                                    </Td>
                                    <Td>
                                        {m.casts.map((mg) => (
                                            <Badge
                                                marginEnd={3}
                                                rounded={5}
                                                colorScheme="blue"
                                            >
                                                {mg.name_cast}
                                            </Badge>
                                        ))}
                                    </Td>
                                    <Td>{m.release_date}</Td>
                                    <Td>{m.rating}</Td>

                                    <Td>
                                        <EditButton
                                            href={`/movie/edit/${m.id}`}
                                            className=""
                                        >
                                            <IconEdit />
                                        </EditButton>
                                        <DeleteButton
                                            id={m.id}
                                            menu="movie"
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
