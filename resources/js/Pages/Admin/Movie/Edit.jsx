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
import { Checkbox, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export default function EditMovie({ auth, genre, cast, movie }) {
    const { data, setData, put, processing, errors } = useForm({
        name: movie.name,
        release_date: movie.release_date,
        rating: movie.rating,
        duration: movie.duration,
        synopsis: movie.synopsis,
        link_trailer: movie.link_trailer,
        // image: movie.image,
        genre_id: movie.genres.map((g) => g.id),
        cast_id: movie.casts.map((c) => c.id),
    });

    const castFormatted = cast.map((actor) => ({
        value: actor.id,
        label: actor.name_cast,
    }));

    const [selectedCast, setSelectedCast] = useState(
        castFormatted.filter((cast) => data.cast_id.includes(cast.value))
    );

    const [selectedGenres, setSelectedGenres] = useState(data.genre_id);

    useEffect(() => {
        setData("genre_id", selectedGenres);
    }, [selectedGenres]);

    const handleCastChange = (selectedOptions) => {
        const selectedValues = selectedOptions
            ? selectedOptions.map((option) => option.value)
            : [];
        setSelectedCast(selectedOptions);
        setData("cast_id", selectedValues);
    };

    const handleCheckboxChange = (id) => {
        setSelectedGenres((prevGenres) =>
            prevGenres.includes(id)
                ? prevGenres.filter((genreId) => genreId !== id)
                : [...prevGenres, id]
        );
    };

    const submit = (e) => {
        e.preventDefault();
        put(route("movie.update", { id: movie.id }));
    };

    const animatedComponents = makeAnimated();

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Edit Movie
                </h2>
            }
        >
            <Head title="Edit Movie" />
            <FormCardTable HeadCardTitle="Form Edit Movie">
                <form onSubmit={submit} encType="multipart/form-data">
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
                        {/* <div className="">
                            <InputLabel htmlFor="image" value="Image" />
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded w-4/5 mt-1"
                                autoComplete="image"
                                isFocused={true}
                                onChange={
                                    (e) => setData("image", e.target.files[0]) // Gunakan e.target.files[0]
                                }
                            />
                            <p className="text-xs text-gray-400 mt-2">
                                PNG, JPG SVG, WEBP, and GIF are Allowed.
                            </p>
                            <InputError
                                message={errors.image}
                                className="mt-2"
                            />
                        </div> */}
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
                        <Stack spacing={[1, 5]} direction={["column", "row"]}>
                            {genre.map((g) => (
                                <Checkbox
                                    key={g.id}
                                    isChecked={selectedGenres.includes(g.id)}
                                    onChange={() => handleCheckboxChange(g.id)}
                                >
                                    {g.name_genre}
                                </Checkbox>
                            ))}
                        </Stack>

                        <InputError
                            message={errors.genre_id}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="cast_id" value="Cast" />
                        <Select
                            name="cast_id"
                            options={castFormatted}
                            value={selectedCast}
                            onChange={handleCastChange}
                            isClearable={true}
                            isMulti={true}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            components={animatedComponents}
                        />
                        <InputError message={errors.cast_id} className="mt-2" />
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
