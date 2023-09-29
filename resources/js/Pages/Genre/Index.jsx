import DeleteButton from "@/Components/DeleteButton";
import Toast from "@/Components/Toast";
import EditButton from "@/Components/EditButton";
import Table from "@/Components/Table";
import HeadCard from "@/Components/HeadCard";
import CreateButton from "@/Components/CreateButton";
import IconCreate from "@/Components/IconCreate";
import IconEdit from "@/Components/IconEdit";
import IconDelete from "@/Components/IconDelete";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
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
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <HeadCard title="Data Genre" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <CreateButton className="" href={`/genre/create`}>
                                Create <IconCreate />
                            </CreateButton>
                        </div>
                        <Table>
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
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
