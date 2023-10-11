import DeleteButton from "@/Components/Admin/atoms/Button/DeleteButton";
import Toast from "@/Components/Admin/atoms/Toast/Index";
import EditButton from "@/Components/Admin/atoms/Button/EditButton";
import Table from "@/Components/Admin/moleculs/Table/Table";
import HeadCard from "@/Components/Admin/moleculs/HeadCard/HeadCard";
import CreateButton from "@/Components/Admin/atoms/Button/CreateButton";
import IconCreate from "@/Components/Admin/atoms/Icon/IconCreate";
import IconEdit from "@/Components/Admin/atoms/Icon/IconEdit";
import IconDelete from "@/Components/Admin/atoms/Icon/IconDelete";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Cast({ auth, cast, no }) {
    const { flash } = usePage().props;
    {
        flash.message && Toast({ title: flash.message });
    }
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
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <HeadCard title="Data Cast" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <CreateButton className="" href={`/cast/create`}>
                                Create <IconCreate />
                            </CreateButton>
                        </div>
                        <Table>
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
                                {cast.map((c) => (
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
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
