import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import InputError from "@/Components/Admin/atoms/Input/InputError";
import InputLabel from "@/Components/Admin/atoms/Input/InputLabel";
import PrimaryButton from "@/Components/Admin/atoms/Button/PrimaryButton";
import TextInput from "@/Components/Admin/atoms/Input/TextInput";
import HeadCard from "@/Components/Admin/moleculs/HeadCard/HeadCard";
import LinkButton from "@/Components/Admin/atoms/Button/LinkButton";
import TextArea from "@/Components/Admin/atoms/Input/TextArea";
import DateInput from "@/Components/Admin/atoms/Input/DateInput";

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
                                <div className="grid grid-rows-2 grid-flow-col gap-1">
                                    <div className="col-span-1">
                                        <InputLabel
                                            htmlFor="name_cast"
                                            value="Cast"
                                        />

                                        <TextInput
                                            id="name_cast"
                                            name="name_cast"
                                            value={data.name_cast}
                                            className="mt-1 block w-4/5"
                                            autoComplete="name_cast"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "name_cast",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.name_cast}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <InputLabel
                                            htmlFor="date_of_birth"
                                            value="Date of Birth"
                                        />
                                        <DateInput
                                            id="date_of_birth"
                                            name="date_of_birth"
                                            value={data.date_of_birth}
                                            className="mt-1 block w-4/5"
                                            autoComplete="date_of_birth"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "date_of_birth",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />
                                        <InputError
                                            message={errors.date_of_birth}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="col-span-1">
                                        <InputLabel
                                            htmlFor="occupation"
                                            value="Occupation"
                                        />

                                        <TextInput
                                            id="occupation"
                                            name="occupation"
                                            value={data.occupation}
                                            className="mt-1 block w-4/5"
                                            autoComplete="occupation"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "occupation",
                                                    e.target.value
                                                )
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.occupation}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="row-span-3">
                                        <InputLabel
                                            htmlFor="place_of_birth"
                                            value="Place of Birth"
                                        />
                                        <TextArea
                                            id="place_of_birth"
                                            name="place_of_birth"
                                            value={data.place_of_birth}
                                            rows="8"
                                            className="mt-1"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData(
                                                    "place_of_birth",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.place_of_birth}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-start mt-4">
                                    <PrimaryButton
                                        className="mb-3 mt-2 me-4"
                                        disabled={processing}
                                    >
                                        Save
                                    </PrimaryButton>
                                    <LinkButton
                                        className="mb-3 mt-2"
                                        href={"/cast"}
                                    >
                                        Back
                                    </LinkButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
