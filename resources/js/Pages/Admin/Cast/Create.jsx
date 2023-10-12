import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import InputError from "@/Components/Admin/atoms/Input/InputError";
import InputLabel from "@/Components/Admin/atoms/Input/InputLabel";
import PrimaryButton from "@/Components/Admin/atoms/Button/PrimaryButton";
import TextInput from "@/Components/Admin/atoms/Input/TextInput";
import LinkButton from "@/Components/Admin/atoms/Button/LinkButton";
import TextArea from "@/Components/Admin/atoms/Input/TextArea";
import DateInput from "@/Components/Admin/atoms/Input/DateInput";
import FormCardTable from "@/Components/Admin/organism/CardTable/Form";

export default function CreateCast({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name_cast: "",
        date_of_birth: "",
        occupation: "",
        place_of_birth: "",
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
            <FormCardTable HeadCardTitle="Form Create Cast">
                <form onSubmit={submit}>
                    <div className="grid grid-rows-2 grid-flow-col gap-1">
                        <div className="col-span-1">
                            <InputLabel htmlFor="name_cast" value="Cast" />

                            <TextInput
                                id="name_cast"
                                name="name_cast"
                                value={data.name_cast}
                                className="mt-1 block w-4/5"
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
                                    setData("date_of_birth", e.target.value)
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
                                    setData("occupation", e.target.value)
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
                                    setData("place_of_birth", e.target.value)
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
                        <LinkButton className="mb-3 mt-2" href={"/cast"}>
                            Back
                        </LinkButton>
                    </div>
                </form>
            </FormCardTable>
        </AuthenticatedLayout>
    );
}
