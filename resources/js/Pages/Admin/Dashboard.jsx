import Card from "@/Components/Admin/moleculs/Card/Card";
import IconCast from "@/Components/Admin/atoms/Icon/IconCast";
import IconGenre from "@/Components/Admin/atoms/Icon/IconGenre";
import IconMovie from "@/Components/Admin/atoms/Icon/IconMovie";
import AuthenticatedLayout from "@/Layouts/Admin/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, genre, cast, movie, user }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto flex justify-start sm:px-6 lg:px-8">
                    <Card
                        title="Genre"
                        className="flex-initial w-80 me-12 ms-20"
                        body={genre}
                        link={"/genre"}
                    >
                        <IconGenre className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                    <Card
                        title="Cast"
                        className="flex-initial w-80 me-12"
                        body={cast}
                        link={"/cast"}
                    >
                        <IconCast className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                    <Card
                        title="Movie"
                        className="flex-initial w-80 me-12"
                        body={movie}
                        link={"/movie"}
                    >
                        <IconMovie className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card>
                    {/* <Card
                        title="User"
                        className="flex-initial w-64"
                        body={user}
                        link={"/user"}
                    >
                        <IconCast className="w-12 h-12 text-gray-500 dark:text-gray-400 mb-4" />
                    </Card> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
