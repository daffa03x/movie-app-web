import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function EditGenre({ auth, cast }) {
    const { data, setData, put, processing, errors } = useForm({
        name_cast: cast.name_cast,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("cast.update", { id: cast.id }));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Cast
                </h2>
            }
        >
            <Head title="Edit Cast" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 pt-6 pb-3 text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-extrabold dark:text-white">
                                Form Edit Cast
                            </h2>
                        </div>
                        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel
                                        htmlFor="name_cast"
                                        value="Genre"
                                    />

                                    <TextInput
                                        id="name_cast"
                                        name="name_cast"
                                        value={data.name_cast}
                                        className="mt-1 block w-2/5"
                                        autoComplete="name_cast"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name_cast", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name_cast}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex items-center justify-start mt-4">
                                    <PrimaryButton
                                        className="mb-3"
                                        disabled={processing}
                                    >
                                        Save
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}