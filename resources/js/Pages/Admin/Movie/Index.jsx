import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState, useEffect } from "react";
import { Spinner, Flex, Badge } from "@chakra-ui/react";
import Pagination from "@/Components/Admin/atoms/Pagination/Index";

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
                    HeadCardTitle="Data Movie"
                    HrefCreate="/movie/create"
                >
                    <table className="w-full">
                        <thead>
                            <tr className="[&>th]:p-2 bg-slate-700 text-left">
                                <th>No</th>
                                <th>Movie</th>
                                <th>Genre</th>
                                <th>Cast</th>
                                <th>Release Date</th>
                                <th>Rating</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movie.data.map((m) => (
                                <tr className="[&>td]:p-2" key={m.id}>
                                    <td key={m.id}>{no++}</td>
                                    <td>{m.name}</td>
                                    <td>
                                        {m.genres.map((mg) => (
                                            <Badge
                                                marginEnd={3}
                                                rounded={5}
                                                colorScheme="purple"
                                            >
                                                {mg.name_genre}
                                            </Badge>
                                        ))}
                                    </td>
                                    <td>
                                        {m.casts.map((mg) => (
                                            <Badge
                                                marginEnd={3}
                                                rounded={5}
                                                colorScheme="blue"
                                            >
                                                {mg.name_cast}
                                            </Badge>
                                        ))}
                                    </td>
                                    <td>{m.release_date}</td>
                                    <td>{m.rating}</td>
                                    <td>
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
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                        className="mt-6"
                        total={total}
                        links={movie.links}
                    />
                </CardTable>
            )}
        </AuthenticatedLayout>
    );
}
