import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import InputError from "@/Components/Admin/atoms/Input/InputError";
import InputLabel from "@/Components/Admin/atoms/Input/InputLabel";
import PrimaryButton from "@/Components/Admin/atoms/Button/PrimaryButton";
import TextInput from "@/Components/Admin/atoms/Input/TextInput";
import HeadCard from "@/Components/Admin/moleculs/HeadCard/HeadCard";

export default function EditGenre({ auth, genre }) {
    const { data, setData, put, processing, errors } = useForm({
        name_genre: genre.name_genre,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("genre.update", { id: genre.id }));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Genre
                </h2>
            }
        >
            <Head title="Edit Genre" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <HeadCard title="Form Edit Genre" />
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
