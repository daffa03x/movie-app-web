export default function HeadCard({ title }) {
    return (
        <>
            <div className="px-6 pt-6 pb-3 text-gray-900 dark:text-gray-100">
                <h2 className="text-2xl font-extrabold dark:text-white">
                    {title}
                </h2>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
        </>
    );
}
