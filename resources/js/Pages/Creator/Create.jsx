import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function CreateGenre({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name_cast: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("cast.store"));
    };

    return (
        
    );
}
