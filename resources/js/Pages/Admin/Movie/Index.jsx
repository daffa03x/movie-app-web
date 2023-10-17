import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Movie({ auth, movie, no }) {
    const { flash } = usePage().props;
    {
        flash.message && Toast({ title: flash.message });
    }
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
            <CardTable HeadCardTitle="Data Movie" HrefCreate="/movie/create">
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
                        {movie.map((m) => (
                            <tr className="[&>td]:p-2" key={m.id}>
                                <td key={m.id}>{no++}</td>
                                <td>
                                    {m.movie_genre.map((mg) => (
                                        <div>{mg.name_genre}</div>
                                    ))}
                                </td>
                                <td>
                                    {m.movie_cast.map((mg) => (
                                        <div>{mg.name_cast}</div>
                                    ))}
                                </td>
                                <td>{m.release_date}</td>
                                <td>{m.rating}</td>
                                <td>
                                    <EditButton
                                        href={`/movie/edit/${c.id}`}
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
            </CardTable>
        </AuthenticatedLayout>
    );
}
