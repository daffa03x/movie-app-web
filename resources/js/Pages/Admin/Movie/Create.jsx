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
import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";

export default function CreateMovie({ auth, genre, cast }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        release_date: "",
        rating: "",
        duration: "",
        synopsis: "",
        link_trailer: "",
        image: "",
        genre_id: [],
        cast_id: [],
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
                    <div className="grid grid-cols-3 gap-3">
                        <div className="">
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

                        <div className="">
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

                        <div className="">
                            <InputLabel
                                htmlFor="link_trailer"
                                value="Link Trailer"
                            />
                            <TextInput
                                id="link_trailer"
                                name="link_trailer"
                                value={data.link_trailer}
                                className="mt-1 block w-4/5"
                                autoComplete="link_trailer"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("link_trailer", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.link_trailer}
                                className="mt-2"
                            />
                        </div>

                        <div className="">
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
                        <div className="">
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
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="synopsis" value="Synopsis" />
                        <TextArea
                            id="synopsis"
                            name="synopsis"
                            value={data.synopsis}
                            rows="6"
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
                    <div className="mt-4">
                        <InputLabel htmlFor="genre_id" value="Genre" />
                        <CheckboxGroup
                            colorScheme="green"
                            value={data.genre_id}
                            onChange={(val) => setData("genre_id", val)}
                        >
                            <Stack
                                spacing={[1, 5]}
                                direction={["column", "row"]}
                            >
                                {genre.map((g) => (
                                    <Checkbox
                                        name="genre_id"
                                        key={g.id}
                                        value={g.id}
                                        isChecked={data.genre_id.includes(g.id)} // Diceklis jika ada dalam data.genre_id
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setData("genre_id", [
                                                    ...data.genre_id,
                                                    g.id,
                                                ]);
                                            } else {
                                                setData(
                                                    "genre_id",
                                                    data.genre_id.filter(
                                                        (id) => id !== g.id
                                                    )
                                                );
                                            }
                                        }}
                                    >
                                        {g.name_genre}
                                    </Checkbox>
                                ))}
                            </Stack>
                        </CheckboxGroup>
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="cast_id" value="Cast" />
                        <CheckboxGroup
                            colorScheme="green"
                            value={data.cast_id}
                            onChange={(val) => setData("cast_id", val)}
                        >
                            <Stack
                                spacing={[1, 5]}
                                direction={["column", "row"]}
                            >
                                {cast.map((c) => (
                                    <Checkbox
                                        name="cast_id"
                                        key={c.id}
                                        value={c.id}
                                        isChecked={data.cast_id.includes(c.id)} // Diceklis jika ada dalam data.genre_id
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setData("cast_id", [
                                                    ...data.cast_id,
                                                    c.id,
                                                ]);
                                            } else {
                                                setData(
                                                    "cast_id",
                                                    data.cast_id.filter(
                                                        (id) => id !== c.id
                                                    )
                                                );
                                            }
                                        }}
                                    >
                                        {c.name_cast}
                                    </Checkbox>
                                ))}
                            </Stack>
                        </CheckboxGroup>
                    </div>
                    <div className="flex items-center justify-start mt-4">
                        <PrimaryButton
                            className="mb-3 mt-2 me-4"
                            disabled={processing}
                        >
                            Save
                        </PrimaryButton>
                        <LinkButton className="mb-3 mt-2" href={"/movie"}>
                            Back
                        </LinkButton>
                    </div>
                </form>
            </FormCardTable>
        </AuthenticatedLayout>
    );
}
