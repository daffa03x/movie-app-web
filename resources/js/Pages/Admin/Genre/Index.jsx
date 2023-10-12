import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import CardTable from "@/Components/Admin/organism/CardTable/Index";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Genre({ auth, genre, no }) {
    const { flash } = usePage().props;
    {
        flash.message && Toast({ title: flash.message });
    }
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
            <CardTable HeadCardTitle="Data Genre" HrefCreate="/genre/create">
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
        </AuthenticatedLayout>
    );
}
