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
import NumberInput from "@/Components/Admin/atoms/Input/NumberInput";

export default function CreateMovie({ auth, genre, cast }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        release_date: "",
        rating: "",
        duration: "",
        synopsis: "",
        genre_id: "",
        cast_id: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("movie.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Create Movie
                </h2>
            }
        >
            <Head title="Create Movie" />
            <FormCardTable HeadCardTitle="Form Create Movie">
                <form onSubmit={submit}>
                    <div className="grid grid-rows-2 grid-flow-col gap-1">
                        <div className="col-span-1">
                            <InputLabel htmlFor="name" value="Movie" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-4/5"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-1">
                            <InputLabel
                                htmlFor="release_date"
                                value="Release Date"
                            />
                            <DateInput
                                id="release_date"
                                name="release_date"
                                value={data.release_date}
                                className="mt-1 block w-4/5"
                                autoComplete="release_date"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("release_date", e.target.value)
                                }
                                required
                            />
                            <InputError
                                message={errors.release_date}
                                className="mt-2"
                            />
                        </div>

                        <div className="col-span-1">
                            <InputLabel htmlFor="rating" value="Rating" />

                            <NumberInput
                                id="rating"
                                name="rating"
                                value={data.rating}
                                className="mt-1 block w-4/5"
                                autoComplete="rating"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("rating", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.rating}
                                className="mt-2"
                            />
                        </div>
                        <div className="row-span-1">
                            <InputLabel htmlFor="duration" value="Duration" />

                            <NumberInput
                                id="duration"
                                name="duration"
                                value={data.duration}
                                className="mt-1 block w-4/5"
                                autoComplete="duration"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("duration", e.target.value)
                                }
                                required
                            />

                            <InputError
                                message={errors.duration}
                                className="mt-2"
                            />
                        </div>
                        <div className="row-span-2">
                            <InputLabel htmlFor="synopsis" value="Synopsis" />
                            <TextArea
                                id="synopsis"
                                name="synopsis"
                                value={data.synopsis}
                                rows="8"
                                className="mt-1"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("synopsis", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.synopsis}
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
