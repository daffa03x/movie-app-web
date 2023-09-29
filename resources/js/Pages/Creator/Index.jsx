import DangerButton from "@/Components/DangerButton";
import LinkButton from "@/Components/LinkButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";

export default function Creator({ auth, creator, no }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };
    const { flash } = usePage().props;
    {
        flash.message &&
            Swal.fire({
                icon: "success",
                title: "success",
                text: flash.message,
            });
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Creator
                </h2>
            }
        >
            <Head title="Creator" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 pt-6 pb-3 text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-extrabold dark:text-white">
                                Data Creator
                            </h2>
                        </div>
                        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <PrimaryButton onClick={confirmUserDeletion}>
                                Delete Account
                            </PrimaryButton>
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
                                        <tr key={c.name_cast}>
                                            <td
                                                className="border px-4 py-2"
                                                key={c.id}
                                            >
                                                {no++}
                                            </td>
                                            <td
                                                className="border px-4 py-2"
                                                key={c.name_cast}
                                            >
                                                {c.name_cast}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <LinkButton
                                                    className="ml-4 "
                                                    href={`/cast/edit/${c.id}`}
                                                >
                                                    Edit
                                                </LinkButton>
                                                <DangerButton
                                                    onClick={() =>
                                                        handleDelete(c.id)
                                                    }
                                                    className="ml-4"
                                                >
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

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
