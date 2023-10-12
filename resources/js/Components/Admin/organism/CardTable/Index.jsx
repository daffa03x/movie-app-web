import HeadCard from "@/Components/Admin/moleculs/HeadCard/HeadCard";
import CreateButton from "@/Components/Admin/atoms/Button/CreateButton";
import IconCreate from "@/Components/Admin/atoms/Icon/IconCreate";

export default function CardTable({ HeadCardTitle, HrefCreate, children }) {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <HeadCard title={HeadCardTitle} />
                    <div className="px-6 pb-3 text-gray-900 dark:text-gray-100">
                        <CreateButton href={HrefCreate}>
                            Create <IconCreate />
                        </CreateButton>
                    </div>
                    <div className="px-6 pb-3  text-gray-900 dark:text-gray-100">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
