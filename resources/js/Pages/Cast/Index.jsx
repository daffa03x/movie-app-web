import DeleteButton from "@/Components/DeleteButton";
import Toast from "@/Components/Toast";
import LinkButton from "@/Components/LinkButton";
import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import HeadCard from "@/Components/HeadCard";

export default function Genre({ auth, cast, no }) {
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
                            <LinkButton className="" href={`/cast/create`}>
                                Create
                            </LinkButton>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">No</th>
                                    <th
                                        className="border px-4 py-2"
                                        width="700"
                                    >
                                        Cast
                                    </th>
                                    <th className="border px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cast.map((c) => (
                                    <tr key={c.id}>
                                        <td
                                            className="border px-4 py-2"
                                            key={c.id}
                                        >
                                            {no++}
                                        </td>
                                        <td className="border px-4 py-2">
                                            {c.name_cast}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <LinkButton
                                                className="ml-4 "
                                                href={`/cast/edit/${c.id}`}
                                            >
                                                Edit
                                            </LinkButton>
                                            <DeleteButton
                                                id={c.id}
                                                menu="cast"
                                                className="ml-4"
                                            >
                                                Hapus
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
