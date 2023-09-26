import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function CreateGenre({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name_genre: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("genre.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Genre
                </h2>
            }
        >
            <Head title="Create Genre" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="px-6 pt-6 pb-3 text-gray-900 dark:text-gray-100">
                            <h2 className="text-2xl font-extrabold dark:text-white">
                                Form Create Genre
                            </h2>
                        </div>
                        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel
                                        htmlFor="name_genre"
                                        value="Genre"
                                    />

                                    <TextInput
                                        id="name_genre"
                                        name="name_genre"
                                        value={data.name_genre}
                                        className="mt-1 block w-2/5"
                                        autoComplete="name_genre"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "name_genre",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.name_genre}
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
