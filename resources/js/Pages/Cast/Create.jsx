import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import HeadCard from "@/Components/HeadCard";

export default function CreateCast({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name_cast: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("cast.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Cast
                </h2>
            }
        >
            <Head title="Create Genre" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <HeadCard title="Form Create Cast" />
                        <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel
                                        htmlFor="name_cast"
                                        value="Cast"
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
