import DangerButton from "@/Components/DangerButton";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Genre({ auth, genre }) {
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
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Genre
                        </div>
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <table className="table-auto border bg-dark w-full">
                                <thead>
                                    <tr>
                                        <th
                                            className="border px-4 py-2"
                                            width="700"
                                        >
                                            Genre
                                        </th>
                                        <th className="border px-4 py-2">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {genre.map((gen) => (
                                        <tr key={gen}>
                                            <td
                                                className="border px-4 py-2"
                                                key={gen.id}
                                            >
                                                {gen.name}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <LinkButton
                                                    className="ml-4"
                                                    href={`/genre/${gen.id}`}
                                                >
                                                    Edit
                                                </LinkButton>
                                                <DangerButton className="ml-4">
                                                    Hapus
                                                </DangerButton>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
