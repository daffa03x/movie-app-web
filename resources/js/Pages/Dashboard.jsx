import Card from "@/Components/Card";
import CreateButton from "@/Components/CreateButton";
import IconCast from "@/Components/IconCast";
import IconCreator from "@/Components/IconCreator";
import IconGenre from "@/Components/IconGenre";
import IconMovie from "@/Components/IconMovie";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, genre, cast }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto flex justify-start sm:px-6 lg:px-8">
                    <Card
                        title="Genre"
                        className="flex-initial w-64 me-12 ms-2"
                        body={genre}
                        link={"/genre"}
                    >
                        <IconGenre className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                    <Card
                        title="Cast"
                        className="flex-initial w-64 me-12"
                        body={cast}
                        link={"/cast"}
                    >
                        <IconCast className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                    <Card
                        title="Creator"
                        className="flex-initial w-64 me-12"
                        body={100}
                        link={"/creator"}
                    >
                        <IconCreator className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                    <Card
                        title="Movie"
                        className="flex-initial w-64"
                        body={100}
                        link={"/movie"}
                    >
                        <IconMovie className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
