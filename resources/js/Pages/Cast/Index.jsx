import DeleteButton from "@/Components/DeleteButton";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

import Swal from "sweetalert2";

export default function Cast({ auth, cast, no }) {
    const toastMixin = Swal.mixin({
        toast: true,
        icon: "success",
        title: "General Title",
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    const { flash } = usePage().props;
    {
        flash.message &&
            toastMixin.fire({
                animation: true,
                title: flash.message,
            });
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
                        <div className="px-6 pt-6 pb-3 text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-extrabold dark:text-white">
                                Data Cast
                            </h2>
                        </div>
                        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <LinkButton className="" href={`/cast/create`}>
                                Create
                            </LinkButton>
                        </div>
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <table className="table-auto border bg-dark w-full text-center">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2">No</th>
                                        <th
                                            className="border px-4 py-2"
                                            width="700"
                                        >
                                            Cast
                                        </th>
                                        <th className="border px-4 py-2">
                                            Action
                                        </th>
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
